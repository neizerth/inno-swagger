import jetEnv, { num } from "jet-env";
/******************************************************************************
                                 Constants
******************************************************************************/

// NOTE: These need to match the names of your ".env" files
export const NodeEnvs = {
	DEV: "development",
	TEST: "test",
	PRODUCTION: "production",
} as const;

/** Returns a jet-env validator that allows only values from the given object. */
function isValueOf<T extends Record<string, string>>(
	allowed: T,
): (arg: unknown, cb?: (v: T[keyof T]) => void) => arg is T[keyof T] {
	const values = new Set(Object.values(allowed));
	return (arg: unknown, cb?: (v: T[keyof T]) => void): arg is T[keyof T] => {
		if (typeof arg === "string" && values.has(arg)) {
			cb?.(arg as T[keyof T]);
			return true;
		}
		return false;
	};
}

/******************************************************************************
                                 Setup
******************************************************************************/

const EnvVars = jetEnv({
	NodeEnv: isValueOf(NodeEnvs),
	Port: num,
});

/******************************************************************************
                            Export default
******************************************************************************/

export default EnvVars;
