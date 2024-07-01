export interface PackageJson {
  name: string;
  version: string;
  files?: string[];
  scripts?: Record<string, string>;
  dependencies?: Record<string, string>;
  devDependencies?: Record<string, string>;
  peerDependencies?: Record<string, string>;
}

export interface PnpmLockImporterPackage {
  specifier: string;
  version: string;
}

export interface PnpmLockImporter {
  specifiers?: Record<string, string>;
  dependencies?: Record<string, PnpmLockImporterPackage>;
  devDependencies?: Record<string, PnpmLockImporterPackage>;
}

export interface PnpmLockPackage {
  resolution: { integrity: string };
  engines?: { node: string };
  deprecated?: string;
  peerDependencies?: Record<string, string>;
  peerDependenciesMeta?: Record<string, { optional: boolean }>;
}

export interface PnpmLock {
  lockfileVersion: number;
  importers: Record<string, PnpmLockImporter>;
  packages: Record<string, PnpmLockPackage>;
}
