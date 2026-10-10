// Loaded by Pokemon Showdown as config/custom-formats.ts
// Base: [Gen 9] National Dex Ubers

// Set to true to make Validate print each Pokemon's tags (for troubleshooting), then back to false
const DEBUG = false;

const ULTRA_BEASTS = [
	'Nihilego', 'Buzzwole', 'Pheromosa', 'Xurkitree', 'Celesteela', 'Kartana',
	'Guzzlord', 'Poipole', 'Naganadel', 'Stakataka', 'Blacephalon',
];

export const Formats: import('../sim/dex-formats').FormatList = [
	{
		section: "Custom Formats",
	},
	{
		name: "[Gen 9] Evoila Dex",
		desc: "National Dex Ubers with a custom banlist, a Species/Item/Sleep Clause, and a cap on Mythical, Sub-Legendary and Legendary Pokemon per team.",
		mod: 'gen9',
		ruleset: [
			'[Gen 9] National Dex Ubers',
			'Item Clause = 1',
		],
		banlist: [
			// Abilities
			'Arena Trap', 'Moody', 'Shadow Tag',

			// Items
			"King's Rock", 'Razor Fang',

			// Moves
			'Last Respects', 'Revival Blessing',
			'Sing', 'Sleep Powder', 'Hypnosis', 'Spore', 'Grass Whistle', 'Dark Void',
			'Tera Blast',

			// Pokemon
			'Miraidon', 'Koraidon', 'Eternatus-Eternamax',
			'Calyrex-Shadow', 'Gengar-Mega',

			// Mythicals
			'Arceus', 'Darkrai-Mega', 'Magearna', 'Deoxys-Attack', 'Hoopa-Unbound',

			// Sub-Legendaries
			'Urshifu', 'Wo-Chien', 'Chien-Pao', 'Ting-Lu', 'Chi-Yu',
			'Ogerpon-Wellspring', 'Ogerpon-Hearthflame', 'Heatran-Mega', 'Spectrier',

			// Legendaries: everything restricted is banned (Terapagos and Zygarde-10% are unbanned below)
			'Restricted Legendary',

			// Other bans
			'Paradox', 'Sneasler', 'Dracovish', 'Darmanitan-Galar', 'Ursaluna-Bloodmoon',
			'Gholdengo', 'Kingambit', 'Golisopod-Mega',

			// Zygarde-10% is allowed, but not with Power Construct
			'Zygarde-10% + Power Construct',
		],
		unbanlist: ['Terapagos', 'Zygarde-10%', 'Baton Pass'],

		// Terapagos cannot Terastallize
		onBegin() {
			for (const pokemon of this.getAllPokemon()) {
				if (pokemon.species.baseSpecies === 'Terapagos') {
					pokemon.canTerastallize = null;
				}
			}
		},

		// Max 2 Pokemon per team from Legendary + Sub-Legendary (Ultra Beasts excluded) + Mythical combined
		onValidateTeam(team) {
			let legendary = 0;
			let subLegendary = 0;
			let mythical = 0;
			for (const set of team) {
				const species = this.dex.species.get(set.species);
				if (species.tags.includes('Restricted Legendary')) legendary++;
				else if (species.tags.includes('Mythical')) mythical++;
				else if (species.tags.includes('Sub-Legendary') && !ULTRA_BEASTS.includes(species.baseSpecies)) {
					subLegendary++;
				}
			}
			const total = legendary + subLegendary + mythical;
			const problems: string[] = [];
			if (DEBUG) {
				for (const set of team) {
					const species = this.dex.species.get(set.species);
					problems.push(`[debug] ${species.name}: ${species.tags.join(', ') || 'no tags'}`);
				}
				problems.push(`[debug] legendary=${legendary} sub-legendary=${subLegendary} mythical=${mythical} total=${total}`);
			}
			if (total > 2) {
				problems.push(
					`Your team has ${total} Legendary, Sub-Legendary or Mythical Pokemon ` +
					`(${legendary} Legendary, ${subLegendary} Sub-Legendary, ${mythical} Mythical); the combined limit is 2.`
				);
			}
			return problems;
		},
	},
];
