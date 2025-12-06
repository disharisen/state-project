"use client";

import { countAtom } from "@/lib/atoms";
import { useAtom } from "jotai";
import { MinusCircleIcon, PlusCircleIcon } from "lucide-react";
import { Button } from "./shadcnui/button";

const GlobalCounterButtons = () => {
	const [count, setCount] = useAtom(countAtom);

	const plus = () => {
		if (count < 100) {
			setCount(count + 1);
		}
	};

	const minus = () => {
		if (count > 0) {
			setCount(count - 1);
		}
	};

	const plusTen = () => {
		if (count < 91) {
			setCount(count + 10);
		}
	};

	const minusTen = () => {
		if (count > 9) {
			setCount(count - 10);
		}
	};
	return (
		<div className="grid grid-cols-2 gap-4">
			<Button
				onClick={minus}
				variant={"destructive"}
				className="cursor-pointer"
				disabled={count < 1}>
				<MinusCircleIcon /> Minus 1
			</Button>
			<Button
				onClick={plus}
				className="cursor-pointer"
				disabled={count > 99}>
				<PlusCircleIcon /> Plus 1
			</Button>

			<Button
				onClick={minusTen}
				variant={"destructive"}
				className="cursor-pointer"
				disabled={count < 10}>
				<MinusCircleIcon /> Minus 10
			</Button>

			<Button
				onClick={plusTen}
				className="cursor-pointer"
				disabled={count > 90}>
				<PlusCircleIcon /> Plus 10
			</Button>
		</div>
	);
};

export default GlobalCounterButtons;
