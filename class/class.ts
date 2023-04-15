class Typescript {
  version: string;
  constructor(version: string) {
    this.version = version;
  }

  info(name: string) {
    return `[${name}]: Typescript version is ${this.version}`;
  }
}

const language = new Typescript("19")

language.info("typescript")

