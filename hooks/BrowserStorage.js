import { useState, useEffect } from "react";

export function getSessionStorage(key, defaultValue) {
  if (typeof window !== "undefined") {
    const stored = sessionStorage.getItem(key);
    if (!stored) {
      return defaultValue;
    }
    return JSON.parse(stored);
  }
}

export function getLocalStorage(key, defaultValue) {
  if (typeof window !== "undefined") {
    const stored = localStorage.getItem(key);
    if (!stored) {
      return defaultValue;
    }
    return JSON.parse(stored);
  }
}

export function useSessionStorage(key, defaultValue) {
  const [value, setValue] = useState(getSessionStorage(key, defaultValue));

  useEffect(() => {
    sessionStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}

export function useLocalStorage(key, defaultValue) {
  const [value, setValue] = useState(getLocalStorage(key, defaultValue));

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}
