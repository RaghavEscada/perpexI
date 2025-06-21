"use client";
import { Curve, Footer, Ready } from "@/components";
import { About, Clients, Hero, Projects, VideoHome, X } from "@/container";
import { useEffect, useRef } from "react";
import BusinessAcquisitionTimeline from "@/components/ui/timeline";

export default function Home() {
	const containerRef = useRef(null);
	const locomotiveScrollRef = useRef<any>(null);
	useEffect(() => {
		(async () => {
			const LocomotiveScroll = (await import("locomotive-scroll")).default;
			if (containerRef.current) {
				locomotiveScrollRef.current = new LocomotiveScroll({
					el: containerRef.current,
				} as any);
			}
		})();

		return () => {
			if (locomotiveScrollRef.current) {
				locomotiveScrollRef.current.destroy();
				locomotiveScrollRef.current = null;
			}
		}
	}, []);

	return (
		<div ref={containerRef} data-scroll-container>
			<Curve backgroundColor={"#f1f1f1"}>
				<Hero />
				<Projects />
				<About />
				<X />
				<Clients />
				<Ready />
			</Curve>
		</div>
	);
}