declare global {
  interface Window {
    trackCheckout: (plan: string, value: number) => void;
  }
}

export {};
