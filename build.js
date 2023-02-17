const fs = require("fs-extra");
const { transformTokens } = require("token-transformer");
const rawTokens = require("./tokens.json");

const exportName = "./tokens.normalised.json";
// Write tokens to new file
const sets = ["global"];
const excludes = [];

const transformerOptions = {
  expandTypography: true,
  expandShadow: true,
  expandComposition: true,
  preserveRawValue: false,
  throwErrorWhenNotResolved: true,
  resolveReferences: true,
};

const tokens = transformTokens(rawTokens, sets, excludes, transformerOptions);
fs.writeJsonSync(exportName, tokens);

const exportPath = "tokens/";

const StyleDictionary = require("style-dictionary").extend({
  source: [exportName],
  platforms: {
    scss: {
      transformGroup: "scss",
      buildPath: exportPath,
      files: [
        {
          destination: "variables.scss",
          format: "scss/variables",
          options: {
            outputReferences: true,
          },
        },
        {
          destination: "map.scss",
          format: "scss/map-deep",
        },
      ],
    },
  },
});

StyleDictionary.buildAllPlatforms();
