import { pathsToModuleNameMapper, JestConfigWithTsJest } from "ts-jest";
import { compilerOptions } from "./tsconfig.json";

/** @type {import('ts-jest').JestConfigWithTsJest} **/
const jestConfig: JestConfigWithTsJest = {
  preset: 'ts-jest',
  testEnvironment: "node",
  moduleDirectories: ["node_modules", "<rootDir>"],
  transform: {
    "^.+.tsx?$": ["ts-jest",{}],
  },
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths)
};

export default jestConfig;