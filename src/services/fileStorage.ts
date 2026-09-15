import { Attachment } from '../types/retreat';

export async function processFileToAttachment(file: File, caption?: string): Promise<Attachment> {
  return new Promise((resolve, reject) => {
    const isImage = file.type.startsWith('image/');
    const isPdf = file.type === 'application/pdf' || file.name.toLowerCase().endsWith('.pdf');

    if (!isImage && !isPdf) {
      reject(new Error('Formato não suportado. Por favor envie uma imagem (JPG/PNG/WEBP) ou um PDF.'));
      return;
    }

    const reader = new FileReader();

    reader.onload = () => {
      const dataUrl = reader.result as string;
      const attachment: Attachment = {
        id: 'att-' + Date.now() + '-' + Math.random().toString(36).substring(2, 7),
        name: file.name,
        type: isImage ? 'image' : 'pdf',
        dataUrl,
        size: file.size,
        createdAt: new Date().toISOString(),
        caption: caption || file.name.replace(/\.[^/.]+$/, "")
      };
      resolve(attachment);
    };

    reader.onerror = (err) => reject(err);
    reader.readAsDataURL(file);
  });
}

export function formatFileSize(bytes: number): string {
  if (bytes < 1024) return bytes + ' B';
  const kb = bytes / 1024;
  if (kb < 1024) return kb.toFixed(1) + ' KB';
  const mb = kb / 1024;
  return mb.toFixed(1) + ' MB';
}
