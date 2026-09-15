import React, { useState, useRef } from 'react';
import { X, Upload, FileText, Image as ImageIcon, Trash2, Eye, Download } from 'lucide-react';
import { Attachment } from '../types/retreat';
import { processFileToAttachment, formatFileSize } from '../services/fileStorage';

interface FileUploadModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  attachments: Attachment[];
  onSaveAttachments: (updated: Attachment[]) => void;
}

export const FileUploadModal: React.FC<FileUploadModalProps> = ({
  isOpen,
  onClose,
  title,
  attachments,
  onSaveAttachments,
}) => {
  const [list, setList] = useState<Attachment[]>(attachments || []);
  const [caption, setCaption] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [previewItem, setPreviewItem] = useState<Attachment | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  if (!isOpen) return null;

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    setLoading(true);
    setError(null);

    try {
      const newAttachments: Attachment[] = [];
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const att = await processFileToAttachment(file, caption.trim() || undefined);
        newAttachments.push(att);
      }
      const updated = [...list, ...newAttachments];
      setList(updated);
      onSaveAttachments(updated);
      setCaption('');
      if (fileInputRef.current) fileInputRef.current.value = '';
    } catch (err: any) {
      setError(err.message || 'Erro ao processar arquivo.');
    } finally {
      setLoading(false);
    }
  };

  const handleRemove = (id: string) => {
    const updated = list.filter(item => item.id !== id);
    setList(updated);
    onSaveAttachments(updated);
    if (previewItem?.id === id) setPreviewItem(null);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/70 backdrop-blur-sm animate-fade-in">
      <div className="bg-white dark:bg-stone-900 rounded-2xl max-w-2xl w-full shadow-2xl overflow-hidden border border-stone-200 dark:border-stone-800 flex flex-col max-h-[90vh]">
        
        {/* Modal Header */}
        <div className="p-4 sm:p-5 border-b border-stone-200 dark:border-stone-800 flex items-center justify-between bg-stone-50 dark:bg-stone-800/50">
          <div>
            <h3 className="font-bold text-lg text-stone-900 dark:text-white flex items-center gap-2">
              <Upload className="w-5 h-5 text-rose-500" />
              Anexos: {title}
            </h3>
            <p className="text-xs text-stone-500 dark:text-stone-400">
              Faça upload de fotos (JPG/PNG) ou documentos (PDF)
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-stone-400 hover:text-stone-600 dark:hover:text-stone-200 hover:bg-stone-100 dark:hover:bg-stone-800"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-5 flex-1">
          
          {/* Upload Drop Area */}
          <div className="border-2 border-dashed border-stone-300 dark:border-stone-700 rounded-xl p-5 text-center bg-stone-50/50 dark:bg-stone-800/30 hover:border-rose-400 transition-colors">
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileChange}
              accept="image/*,application/pdf"
              multiple
              className="hidden"
              id="file-upload-input"
            />
            <label
              htmlFor="file-upload-input"
              className="cursor-pointer flex flex-col items-center justify-center space-y-2"
            >
              <div className="w-12 h-12 rounded-full bg-rose-100 dark:bg-rose-950/60 text-rose-600 dark:text-rose-400 flex items-center justify-center">
                <Upload className="w-6 h-6" />
              </div>
              <p className="text-sm font-semibold text-stone-800 dark:text-stone-200">
                Clique para selecionar Imagem ou PDF
              </p>
              <p className="text-xs text-stone-500 dark:text-stone-400">
                Formatos aceitos: JPG, PNG, WEBP, PDF (armazenamento offline local)
              </p>
            </label>

            <div className="mt-3 max-w-sm mx-auto">
              <input
                type="text"
                value={caption}
                onChange={(e) => setCaption(e.target.value)}
                placeholder="Legenda opcional (ex: Arrumação do Altar)"
                className="w-full text-xs px-3 py-1.5 rounded-lg border border-stone-300 dark:border-stone-700 bg-white dark:bg-stone-800 text-stone-800 dark:text-stone-200"
              />
            </div>

            {loading && (
              <p className="mt-2 text-xs text-rose-600 font-medium animate-pulse">
                Processando arquivo...
              </p>
            )}
            {error && (
              <p className="mt-2 text-xs text-red-600 dark:text-red-400">
                {error}
              </p>
            )}
          </div>

          {/* Attachments List */}
          <div>
            <h4 className="text-sm font-semibold text-stone-700 dark:text-stone-300 mb-3 flex items-center justify-between">
              <span>Arquivos Anexados ({list.length})</span>
            </h4>

            {list.length === 0 ? (
              <div className="text-center py-6 text-stone-400 text-xs italic bg-stone-50 dark:bg-stone-800/30 rounded-xl">
                Nenhum arquivo anexado ainda.
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {list.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center justify-between p-3 rounded-xl border border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-800 shadow-sm hover:shadow transition-shadow"
                  >
                    <div className="flex items-center space-x-3 overflow-hidden">
                      {item.type === 'image' ? (
                        <div className="w-12 h-12 rounded-lg bg-stone-100 dark:bg-stone-700 overflow-hidden flex-shrink-0 border border-stone-200 dark:border-stone-600">
                          <img
                            src={item.dataUrl}
                            alt={item.caption || item.name}
                            className="w-full h-full object-cover cursor-pointer"
                            onClick={() => setPreviewItem(item)}
                          />
                        </div>
                      ) : (
                        <div className="w-12 h-12 rounded-lg bg-red-100 dark:bg-red-950 text-red-600 dark:text-red-400 flex items-center justify-center flex-shrink-0">
                          <FileText className="w-6 h-6" />
                        </div>
                      )}

                      <div className="overflow-hidden">
                        <p className="text-xs font-semibold text-stone-800 dark:text-stone-200 truncate" title={item.name}>
                          {item.caption || item.name}
                        </p>
                        <p className="text-[10px] text-stone-500 dark:text-stone-400">
                          {formatFileSize(item.size)} • {item.type.toUpperCase()}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-1">
                      <button
                        onClick={() => setPreviewItem(item)}
                        title="Visualizar"
                        className="p-1.5 text-stone-500 hover:text-stone-700 dark:text-stone-400 dark:hover:text-stone-200"
                      >
                        <Eye className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleRemove(item.id)}
                        title="Excluir"
                        className="p-1.5 text-red-500 hover:text-red-700"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Full Preview View within modal */}
          {previewItem && (
            <div className="p-4 rounded-xl bg-stone-100 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-stone-700 dark:text-stone-300">
                  Visualizando: {previewItem.caption || previewItem.name}
                </span>
                <div className="flex items-center gap-2">
                  <a
                    href={previewItem.dataUrl}
                    download={previewItem.name}
                    className="text-xs flex items-center gap-1 text-rose-600 dark:text-rose-400 hover:underline"
                  >
                    <Download className="w-3.5 h-3.5" /> Baixar
                  </a>
                  <button
                    onClick={() => setPreviewItem(null)}
                    className="text-stone-400 hover:text-stone-600 text-xs"
                  >
                    Fechar visualização
                  </button>
                </div>
              </div>

              {previewItem.type === 'image' ? (
                <div className="flex justify-center bg-black/10 dark:bg-black/30 rounded-lg p-2 max-h-80 overflow-auto">
                  <img
                    src={previewItem.dataUrl}
                    alt={previewItem.name}
                    className="max-h-72 object-contain rounded-lg shadow"
                  />
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center p-6 bg-stone-200/50 dark:bg-stone-900/50 rounded-lg space-y-3">
                  <FileText className="w-12 h-12 text-red-500" />
                  <p className="text-sm font-medium text-stone-800 dark:text-stone-200">
                    Documento PDF: {previewItem.name}
                  </p>
                  <a
                    href={previewItem.dataUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-rose-600 hover:bg-rose-700 text-white rounded-lg text-xs font-medium flex items-center gap-2"
                  >
                    <Eye className="w-4 h-4" /> Abrir PDF em Nova Aba
                  </a>
                </div>
              )}
            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="p-4 border-t border-stone-200 dark:border-stone-800 flex justify-end bg-stone-50 dark:bg-stone-800/50">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-retreat-700 hover:bg-retreat-800 dark:bg-stone-700 dark:hover:bg-stone-600 text-white text-sm font-medium transition-colors"
          >
            Concluir
          </button>
        </div>

      </div>
    </div>
  );
};
