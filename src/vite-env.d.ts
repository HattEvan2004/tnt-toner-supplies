/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** Optional form submission endpoint (e.g. Web3Forms / Formspree / API route). */
  readonly VITE_FORM_ENDPOINT?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
