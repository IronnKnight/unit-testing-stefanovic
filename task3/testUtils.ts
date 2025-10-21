
import timezonedDate from "timezoned-date";

export interface MockDateSetup {
  reset(): void;
  set(options: { offset?: number; isoDate?: string }): void;
}

const originalDate = globalThis.Date;

export const setupMockDate = (): MockDateSetup => {
  const reset = () => {
    globalThis.Date = originalDate;
  }

  const set = ({ isoDate, offset }: { offset?: number; isoDate?: string }) => {
    const getMockDate = (): typeof import("mockdate") => {
      let MockDate: typeof import('mockdate');
      jest.isolateModules(() => {
        MockDate = require('mockdate');
      });
      return MockDate!;
    };

    if (offset !== undefined) {
      Date = timezonedDate.makeConstructor(offset);
    }

    if (isoDate !== undefined) {
      getMockDate().set(isoDate);
    }
  }

  return { reset, set };
}