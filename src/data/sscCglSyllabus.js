// Master SSC CGL & Central Exams Syllabus
// Aggregates full-depth subject modules from modular syllabus chapters

import { QUANT_SYLLABUS } from './syllabus/quantSyllabus';
import { REASONING_SYLLABUS } from './syllabus/reasoningSyllabus';
import { ENGLISH_SYLLABUS } from './syllabus/englishSyllabus';
import { GK_SYLLABUS } from './syllabus/gkSyllabus';
import { COMPUTER_SYLLABUS } from './syllabus/computerSyllabus';
import { DEST_STATS_SYLLABUS } from './syllabus/destStatsSyllabus';

export const SSC_CGL_SYLLABUS = {
  quant: QUANT_SYLLABUS,
  reasoning: REASONING_SYLLABUS,
  english: ENGLISH_SYLLABUS,
  gk: GK_SYLLABUS,
  computer: COMPUTER_SYLLABUS,
  di: DEST_STATS_SYLLABUS.di,
  dest: DEST_STATS_SYLLABUS.dest,
  statistics: DEST_STATS_SYLLABUS.statistics
};
