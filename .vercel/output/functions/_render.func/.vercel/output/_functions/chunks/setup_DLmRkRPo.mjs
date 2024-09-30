import { A as AstroError, a9 as EnvInvalidVariables } from './astro/server_SzM1YHsw.mjs';

function invalidVariablesToError(invalid) {
  const _errors = [];
  for (const { key, type, errors } of invalid) {
    if (errors[0] === "missing") {
      _errors.push(`${key} is missing`);
    } else if (errors[0] === "type") {
      _errors.push(`${key}'s type is invalid, expected: ${type}`);
    } else {
      _errors.push(`The following constraints for ${key} are not met: ${errors.join(", ")}`);
    }
  }
  return _errors;
}

let _getEnv = (key) => process.env[key];
function setGetEnv(fn, reset = false) {
  _getEnv = fn;
  _onSetGetEnv(reset);
}
let _onSetGetEnv = () => {
};
function setOnSetGetEnv(fn) {
  _onSetGetEnv = fn;
}
function getEnv(...args) {
  return _getEnv(...args);
}
function createInvalidVariablesError(key, type, result) {
  return new AstroError({
    ...EnvInvalidVariables,
    message: EnvInvalidVariables.message(
      invalidVariablesToError([{ key, type, errors: result.errors }])
    )
  });
}

const setup = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  setGetEnv
}, Symbol.toStringTag, { value: 'Module' }));

export { setGetEnv as a, setup as b, createInvalidVariablesError as c, getEnv as g, setOnSetGetEnv as s };
