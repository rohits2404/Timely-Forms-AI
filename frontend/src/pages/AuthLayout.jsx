import { Sparkles, Zap, BarChart3, ShieldCheck } from "lucide-react";
import { Logo } from "../components/Logo.jsx";

const HIGHLIGHTS = [
	{
		icon: Sparkles,
		title: "AI Form Generation",
		desc: "Describe It — Get A Polished Form Instantly.",
	},
	{
		icon: Zap,
		title: "Drag & Drop Builder",
		desc: "18 Field Types With Live Preview.",
	},
	{
		icon: BarChart3,
		title: "Built-In Analytics",
		desc: "Charts, Conversion & Completion Insights.",
	},
	{
		icon: ShieldCheck,
		title: "Share Securely",
		desc: "Unique Links, Responsive Public Pages.",
	},
];

/** Two-column auth shell: a marketing panel and the form slot. */
export function AuthLayout({ children }) {
	return (
		<div className="flex min-h-screen bg-app">
			<div className="relative hidden w-1/2 flex-col justify-between overflow-hidden bg-brand-gradient p-12 text-white lg:flex">
				<div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/10 blur-2xl" />
				<div className="absolute -bottom-32 -left-16 h-80 w-80 rounded-full bg-brand-300/20 blur-3xl" />

				<Logo className="relative [&_span]:text-white [&_.text-brand-600]:text-white/70" />

				<div className="relative">
					<h1 className="max-w-md text-4xl font-bold leading-tight tracking-tight">
						Build Beautiful Forms In minutes, Not Hours.
					</h1>
					<p className="mt-4 max-w-sm text-white/80">
						The AI-Powered Form Builder For Teams Who Care About How
						Their Data Is Collected.
					</p>

					<div className="mt-10 grid grid-cols-2 gap-4">
						{HIGHLIGHTS.map((h) => (
							<div
								key={h.title}
								className="rounded-2xl bg-white/10 p-4 backdrop-blur"
							>
								<h.icon className="h-5 w-5" />
								<p className="mt-2 text-sm font-semibold">
									{h.title}
								</p>
								<p className="mt-0.5 text-xs text-white/70">
									{h.desc}
								</p>
							</div>
						))}
					</div>
				</div>

				<p className="relative text-xs text-white/60">
					© {new Date().getFullYear()} Timely Forms AI. Crafted For
					Premium Teams.
				</p>
			</div>

			<div className="flex w-full flex-col items-center justify-center p-6 lg:w-1/2">
				<div className="w-full max-w-sm animate-slide-up">
					{children}
				</div>
			</div>
		</div>
	);
}