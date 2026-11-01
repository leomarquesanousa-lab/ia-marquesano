/** Contratos internos; o adaptador futuro traduzirá os dados da API externa. */
export type VideoProvider = "kling";

export type VideoGenerationInput = {
  prompt: string;
};

export type VideoGenerationJob = {
  id: string;
  provider: VideoProvider;
  status: "pending" | "processing" | "completed" | "failed";
  /** URL temporária fornecida pelo provedor, sem cópia local do vídeo. */
  videoUrl?: string;
};
