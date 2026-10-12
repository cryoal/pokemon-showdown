// Loaded by Pokemon Showdown as config/custom-formats.ts
// Base: [Gen 9] National Dex Ubers

// Set to true to make Validate print each Pokemon's tags (for troubleshooting), then back to false
const DEBUG = false;

const ULTRA_BEASTS = [
	'Nihilego', 'Buzzwole', 'Pheromosa', 'Xurkitree', 'Celesteela', 'Kartana',
	'Guzzlord', 'Poipole', 'Naganadel', 'Stakataka', 'Blacephalon',
];

// Ability each Mega gets when it Mega Evolves (key = Mega forme name, value = ability name)
const MEGA_ABILITIES: {[species: string]: string} = {
	'Ampharos-Mega': 'Fluffy',
	'Lucario-Mega': "Mind's Eye",
	'Lucario-Mega-Z': "Mind's Eye",
};

// Mega Pokemon explicitly kept banned (do NOT unban these)
const BANNED_MEGAS = [
	'Heatran-Mega',
	'Darkrai-Mega',
	'Golisopod-Mega',
	'Magearna-Mega',
	'Magearna-Original-Mega',
	'Zygarde-Mega',
];

// All other Mega Pokemon to unban (add/remove as your dex requires)
const UNBANNED_MEGAS = [
	'Meganium-Mega', 'Barbaracle-Mega', 'Baxcalibur-Mega', 'Chandelure-Mega',
	'Chesnaught-Mega', 'Chimecho-Mega', 'Clefable-Mega', 'Crabominable-Mega',
	'Crucibelle-Mega', 'Delphox-Mega', 'Dragalge-Mega', 'Dragonite-Mega',
	'Drampa-Mega', 'Eelektross-Mega', 'Emboar-Mega', 'Excadrill-Mega',
	'Falinks-Mega', 'Feraligatr-Mega', 'Floette-Mega', 'Froslass-Mega',
	'Glimmora-Mega', 'Golurk-Mega', 'Greninja-Mega', 'Hawlucha-Mega',
	'Malamar-Mega', 'Meowstic-F-Mega', 'Meowstic-M-Mega', 'Pyroar-Mega',
	'Scolipede-Mega', 'Scovillain-Mega', 'Scrafty-Mega', 'Skarmory-Mega',
	'Staraptor-Mega', 'Starmie-Mega', 'Tatsugiri-Curly-Mega',
	'Tatsugiri-Droopy-Mega', 'Tatsugiri-Stretchy-Mega', 'Victreebel-Mega',
	'Zeraora-Mega', 'Raichu-Mega-X', 'Raichu-Mega-Y', 'Absol-Mega-Z',
	'Garchomp-Mega-Z', 'Lucario-Mega-Z',
];

// Mega stones flagged as "Future" in the data (Z-A stones). They must be unbanned by name.
// Darkranite, Heatranite, Golisopite, Magearnite and Zygardite are left out on purpose (their Megas are banned).
const UNBANNED_MEGA_STONES = [
	'Absolite Z', 'Barbaracite', 'Baxcalibrite', 'Chandelurite', 'Chesnaughtite',
	'Chimechite', 'Clefablite', 'Crabominite', 'Crucibellite', 'Delphoxite',
	'Dragalgite', 'Dragoninite', 'Drampanite', 'Eelektrossite', 'Emboarite',
	'Excadrite', 'Falinksite', 'Feraligite', 'Floettite', 'Froslassite',
	'Garchompite Z', 'Glimmoranite', 'Golurkite', 'Greninjite', 'Hawluchanite',
	'Lucarionite Z', 'Malamarite', 'Meganiumite', 'Meowsticite', 'Pyroarite',
	'Raichunite X', 'Raichunite Y', 'Scolipite', 'Scovillainite', 'Scraftinite',
	'Skarmorite', 'Staraptite', 'Starminite', 'Tatsugirinite', 'Victreebelite',
	'Zeraorite',
];

export const Formats: import('../sim/dex-formats').FormatList = [
	{
		section: "Custom Formats",
	},
	{
		name: "[Gen 9] National Dex Evoila",
		desc: "National Dex Ubers with a custom banlist, a Species/Item/Sleep Clause, and a cap on Mythical, Sub-Legendary and Legendary Pokemon per team.",
		mod: 'gen9',
		ruleset: [
			'[Gen 9] National Dex Ubers',
			'Item Clause = 1',
			'Evasion Abilities Clause',
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

			// Terapagos: only the Stellar forme is banned
			'Terapagos-Stellar',

			// Mythicals
			'Arceus', 'Magearna', 'Deoxys-Attack', 'Hoopa-Unbound',

			// Sub-Legendaries
			'Urshifu', 'Wo-Chien', 'Chien-Pao', 'Ting-Lu', 'Chi-Yu',
			'Ogerpon-Wellspring', 'Ogerpon-Hearthflame', 'Spectrier',

			// Legendaries: everything restricted is banned (Terapagos and Zygarde-10% are unbanned below)
			'Restricted Legendary',

			// Other bans
			'Paradox', 'Sneasler', 'Dracovish', 'Darmanitan-Galar', 'Ursaluna-Bloodmoon',
			'Gholdengo', 'Kingambit',

			// Zygarde-10% is allowed, but not with Power Construct
			'Zygarde-10% + Power Construct',

			// Mega Pokemon we are keeping banned
			...BANNED_MEGAS,
		],
		unbanlist: [
			// Terapagos base forme and Terapagos-Terastal are allowed
			'Terapagos', 'Terapagos-Terastal',
			'Zygarde-10%', 'Baton Pass',
			// Unban the allowed Megas
			...UNBANNED_MEGAS,
			// Unban the matching Mega stones
			...UNBANNED_MEGA_STONES,
		],

		// Terapagos cannot Terastallize
		onBegin() {
			for (const pokemon of this.getAllPokemon()) {
				if (pokemon.species.baseSpecies === 'Terapagos') {
					pokemon.canTerastallize = null;
				}
			}
		},

		// Give Megas their custom ability right after they Mega Evolve
		onAfterMega(pokemon) {
			const ability = MEGA_ABILITIES[pokemon.species.name];
			if (!ability) return;
			pokemon.setAbility(ability, null, null, true);
			pokemon.baseAbility = this.toID(ability);
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

export const Formats: import('../sim/dex-formats').FormatList = [
  {
    section: "Custom Formats",
  },
  {
    name: "[Gen 9] National Dex Evoila",
    mod: 'gen9',
    ruleset: [
      '[Gen 9] National Dex Ubers',
      '!Obtainable', // IMPORTANT: Disables generation filtering on items/moves/species
      '+Future',     // Allows items/species tagged with isNonstandard: "Future"
      '+Unreleased', // Allows items/species tagged with isNonstandard: "Unobtainable" or "Unreleased"
    ],
    // Keep your banlist / unbanlist as they were!
  },
];
