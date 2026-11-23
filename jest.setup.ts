// ========================================
// jest.setup.js
// ========================================

import '@testing-library/jest-dom';
import 'jest-styled-components';



(globalThis as Record<string, unknown>).IS_REACT_ACT_ENVIRONMENT = true;