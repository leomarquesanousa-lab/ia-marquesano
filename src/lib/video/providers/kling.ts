/**
 * Ponto de extensão para o futuro adaptador Kling AI no servidor.
 * Sem chamadas HTTP ou leitura de credenciais nesta etapa.
 * Autenticação, endpoints e payloads serão definidos na implementação da API.
 */
export const klingProvider = {
  id: "kling",
  name: "Kling AI",
  enabled: false,
} as const;
