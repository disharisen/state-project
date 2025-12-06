"use client";

import { MinusCircleIcon, PlusCircleIcon } from "lucide-react";
import { useState } from "react";
import { Button } from "./shadcnui/button";
import { CardContent } from "./shadcnui/card";

const ExpertCounter = () => {
	const [count, setCount] = useState(0);

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
		<CardContent className="space-y-4">
			<div className="text-center text-xl">
				Count: <span className="font-bold">{count}</span>
			</div>

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
		</CardContent>
	);
};

export default ExpertCounter;
