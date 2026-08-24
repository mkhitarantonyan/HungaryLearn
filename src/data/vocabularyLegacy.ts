/** One-time compatibility map for card IDs produced by the former 6-items-per-lesson list. */
export const LEGACY_REVIEW_CARD_ALIASES: Readonly<Record<string, string>> = {
  l1_v1: 'card_l1_v1', l1_v2: 'card_l1_v2', l1_v3: 'card_l1_v3', l1_v4: 'card_l1_v4', l1_v5: 'card_l1_v5', l1_v6: 'card_l1_v6',
  l2_v1: 'card_l2-vocab-szia', l2_v2: 'card_l2-vocab-lenni', l2_v3: 'card_l2-vocab-lenni', l2_v4: 'card_l2-vocab-magyar', l2_v6: 'card_l2-vocab-en',
  l3_v1: 'card_l3_v1', l3_v2: 'card_l3_v2', l3_v3: 'card_l3_v3', l3_v4: 'card_l3_v4', l3_v5: 'card_l3_v5', l3_v6: 'card_l3_v6',
  l4_v1: 'card_l4_v1', l4_v2: 'card_l4_v2', l4_v3: 'card_l4_v5', l4_v4: 'card_l4_v1', l4_v5: 'card_l14_v14', l4_v6: 'card_l4_v3',
  l5_v1: 'card_l5_v1', l5_v2: 'card_l5_v8', l5_v6: 'card_l5_v6',
  l6_v1: 'card_l2-vocab-hogy-vagy',
  l7_v1: 'card_l3_v4', l7_v2: 'card_l7_v2', l7_v3: 'card_l3_v5', l7_v4: 'card_l7_v4', l7_v5: 'card_l7_v5', l7_v6: 'card_l1_v6',
  l8_v1: 'card_l8_v1', l8_v2: 'card_l8_v2', l8_v3: 'card_l8_v5', l8_v4: 'card_l3_v4', l8_v6: 'card_l8_v9',
  l9_v1: 'card_l9_v1', l9_v2: 'card_l1_v3', l9_v3: 'card_l9_v3', l9_v4: 'card_l9_v12', l9_v5: 'card_l9_v13',
  l10_v1: 'card_l3_v4', l10_v2: 'card_l10_v11', l10_v3: 'card_l3_v4', l10_v6: 'card_l10_v7',
  l11_v1: 'card_l3_v6', l11_v2: 'card_l3_v6', l11_v3: 'card_l3_v6', l11_v6: 'card_l11_v10',
  l12_v1: 'card_l12_v1', l12_v2: 'card_l12_v7', l12_v4: 'card_l12_v4', l12_v5: 'card_l12_v10', l12_v6: 'card_l12_v11',
  l13_v1: 'card_l4_v1', l13_v3: 'card_l2-vocab-lenni', l13_v4: 'card_l13_v9', l13_v5: 'card_l13_v11', l13_v6: 'card_l4_v5',
  l14_v1: 'card_l14_v4', l14_v2: 'card_l14_v2', l14_v3: 'card_l14_v8', l14_v4: 'card_l14_v6', l14_v5: 'card_l14_v12',
  l15_v1: 'card_l15_v11', l15_v5: 'card_l3_v4', l15_v6: 'card_l10_v12',
  l16_v4: 'card_l1_v2',
  l17_v1: 'card_l17_v5', l17_v2: 'card_l17_v6', l17_v3: 'card_l17_v7', l17_v4: 'card_l17_v1', l17_v5: 'card_l17_v2', l17_v6: 'card_l17_v8',
  l18_v1: 'card_l4_v1', l18_v2: 'card_l18_v3', l18_v4: 'card_l18_v6', l18_v5: 'card_l7_v5', l18_v6: 'card_l18_v5',
  l19_v6: 'card_l10_v11',
  l20_v2: 'card_l15_v9', l20_v3: 'card_l4_v5', l20_v5: 'card_l2-vocab-lenni', l20_v6: 'card_l18_v3',
  l21_v1: 'card_l7_v4', l21_v2: 'card_l4_v2', l21_v5: 'card_l7_v4', l21_v6: 'card_l3_v5',
  l22_v2: 'card_l4_v3', l22_v3: 'card_l22_v3', l22_v4: 'card_l4_v2', l22_v5: 'card_l22_v2', l22_v6: 'card_l2-vocab-lenni',
  l23_v1: 'card_l4_v1', l23_v2: 'card_l15_v9', l23_v3: 'card_l2-vocab-lenni', l23_v4: 'card_l7_v5', l23_v5: 'card_l4_v1',
  l24_v1: 'card_l24_v2', l24_v2: 'card_l24_v3', l24_v4: 'card_l24_v4', l24_v5: 'card_l24_v1',
  l25_v3: 'card_l10_v13', l25_v6: 'card_l25_v2',
  l26_v6: 'card_l12_v1',
  l27_v4: 'card_l27_v3', l27_v5: 'card_l27_v4',
  l28_v6: 'card_l28_v1',
};

/** Former cards absent from current target vocabulary. Persisted states remain untouched and are ignored by the UI. */
export const INTENTIONAL_ORPHAN_REVIEW_CARD_IDS = [
  'l2_v5', 'l5_v3', 'l5_v4', 'l5_v5', 'l6_v2', 'l6_v3', 'l6_v4', 'l6_v5', 'l6_v6',
  'l8_v5', 'l9_v6', 'l10_v4', 'l10_v5', 'l11_v4', 'l11_v5', 'l12_v3', 'l13_v2',
  'l14_v6', 'l15_v2', 'l15_v3', 'l15_v4', 'l16_v1', 'l16_v2', 'l16_v3', 'l16_v5', 'l16_v6',
  'l18_v3', 'l19_v1', 'l19_v2', 'l19_v3', 'l19_v4', 'l19_v5', 'l20_v1', 'l20_v4',
  'l21_v3', 'l21_v4', 'l22_v1', 'l23_v6', 'l24_v3', 'l24_v6', 'l25_v1', 'l25_v2',
  'l25_v4', 'l25_v5', 'l26_v1', 'l26_v2', 'l26_v3', 'l26_v4', 'l26_v5',
  'l27_v1', 'l27_v2', 'l27_v3', 'l27_v6', 'l28_v1', 'l28_v2', 'l28_v3', 'l28_v4', 'l28_v5',
] as const;

export const LEGACY_REVIEW_CARD_COUNT = 168;
