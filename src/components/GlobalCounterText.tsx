"use client";

import { countAtom } from "@/lib/atoms";
import { useAtomValue } from "jotai";

const GlobalCounterText = () => {
	const count = useAtomValue(countAtom);
	return (
		<div className="text-center text-xl">
			Count: <span className="font-bold">{count}</span>
		</div>
	);
};

export default GlobalCounterText;
