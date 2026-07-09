import { useEffect, useState } from 'react';
import { FaPalette } from 'react-icons/fa';
import { storageGet, storageSet, STORAGE_KEYS } from '../lib/storage';
import styles from '../styles/Header.module.css';

const ACCENTS = ['emerald', 'violet', 'bronze'];

// Cycles the site accent color; persisted so the choice survives reloads.
const AccentPicker = () => {
  const [accent, setAccent] = useState('emerald');

  useEffect(() => {
    const saved = storageGet(STORAGE_KEYS.accent, 'emerald');
    if (ACCENTS.includes(saved)) {
      setAccent(saved);
      document.documentElement.dataset.accent = saved;
    }
  }, []);

  const cycle = () => {
    const next = ACCENTS[(ACCENTS.indexOf(accent) + 1) % ACCENTS.length];
    setAccent(next);
    document.documentElement.dataset.accent = next;
    storageSet(STORAGE_KEYS.accent, next);
  };

  return (
    <button
      className={styles.iconBtn}
      onClick={cycle}
      aria-label={`Change accent color (current: ${accent})`}
      title={`Accent: ${accent}`}
    >
      <FaPalette />
    </button>
  );
};

export default AccentPicker;
