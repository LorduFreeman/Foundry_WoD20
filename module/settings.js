export const systemSettings = function() {

    // "core" is core settings
	// "worldofdarkness" as system setting
	// "wod" or other then is module settings
	game.settings.register("worldofdarkness", "worldVersion", {
		name: game.i18n.localize('wod.settings.worldversion'),
		hint: game.i18n.localize('wod.settings.worldversionhint'),
		scope: "world",
		config: true,
		default: "1",
		type: String,
	});

	// Are you to use the permanent (check) values or temporary (not checked) of e.g. Willpower in rolls
	game.settings.register("worldofdarkness", "advantageRolls", {
		name: game.i18n.localize('wod.settings.advantagerolls'),
		hint: game.i18n.localize('wod.settings.advantagerollshint'),
		scope: "world",
		config: false,
		default: true,
		type: Boolean,
	});	

	game.settings.register("worldofdarkness", "attributeSettings", {
		name: game.i18n.localize('wod.settings.attributesettings'),
		hint: game.i18n.localize('wod.settings.attributesettingshint'),
		scope: "world",
		config: false,
		default: "20th",
		type: String,
		choices: {
			"20th": "20th edition",
			"5th": "5th edition"
		}
	});

    // DICE RULES

    game.settings.register("worldofdarkness", "theRollofOne", {
		name: "LANG: Use default result 1 handling",
		hint: "LANG: Default 20th dice setting - According to the 20th rules all ones reduce number of success by one.",
		scope: "world",
		config: false,
		default: true,
		type: Boolean,
	});

    game.settings.register("worldofdarkness", "lowestDifficulty", {
		name: "LANG: Lowest difficulty allowed",
		hint: "LANG: Default 20th dice setting - According to the 20th rules all ones reduce number of success by one.",
		scope: "world",
		config: false,
		default: 2,
		type: Number,
        choices: {
			"2": "2",
			"3": "3",
            "4": "4",
            "5": "5",
            "6": "6"
		}
	});

    game.settings.register("worldofdarkness", "specialityAddSuccess", {
		name: "LANG: Use default rule for speciality",
		hint: "LANG: Default use of speciallities - adds a number of successes on the roll of 10s",
		scope: "world",
		config: false,
		default: 2,
		type: Number,
        choices: {
            "0": "LANG: Do not use",
            "1": "1",
			"2": "2",
			"3": "3"
		}
	});

    game.settings.register("worldofdarkness", "specialityReduceDiff", {
		name: "LANG: Speciality lowers difficulty",
		hint: "LANG: If use of speciality the difficulty of the roll is lowered.",
		scope: "world",
		config: false,
		default: 0,
		type: Number,
        choices: {
            "0": "LANG: Do not use",
            "1": "-1",
			"2": "-2",
			"3": "-3"
		}
	});

    game.settings.register("worldofdarkness", "tenAddSuccess", {
		name: "LANG: 10s always add successes",
		hint: "LANG: A change of how handling 10s to always adds a number of successes to the roll",
		scope: "world",
		config: false,
		default: 0,
		type: Number,
        choices: {
            "0": "LANG: Do not use",
            "1": "1",
			"2": "2",
			"3": "3"
		}
	});

    game.settings.register("worldofdarkness", "explodingDice", {
		name: "LANG: 10s explode handling",
		hint: "LANG: In revised rules when rolling a 10 you got.",
		scope: "world",
		config: false,
		default: false,
		type: String,
        choices: {
			"never": "LANG: Do not use",
			"speciality": "LANG: Use with speciality",
            "always": "LANG: Always use"
		}
	});

    // END DICE RULES

    // HUNTER SETTINGS

    game.settings.register("worldofdarkness", "hunteredgeSettings", {
		name: game.i18n.localize('wod.settings.edgesettings'),
		hint: game.i18n.localize('wod.settings.edgesettingshints'),
		scope: "world",
		config: false,
		default: "virtues",
		type: String,
		choices: {
			"virtues": game.i18n.localize('wod.settings.choicevirtue'),
			"experience": game.i18n.localize('wod.settings.choiceexperience')
		}
	});

    // END HUNTER SETTINGS

    // WEREWOLF SETTINGS

    game.settings.register("worldofdarkness", "wererwolfrageSettings", {
		name: game.i18n.localize('wod.settings.ragesettings'),
		hint: game.i18n.localize('wod.settings.ragesettingshints'),
		scope: "world",
		config: false,
		default: true,
		type: Boolean
	});

    // END WEREWOLF SETTINGS

    // PERMISSION SETTINGS

    game.settings.register("worldofdarkness", "observersFullActorViewPermission", {
		name: game.i18n.localize('wod.settings.observersactorpermission'),
		hint: game.i18n.localize('wod.settings.observersactorpermissionhint'),
		scope: "world",
		config: false,
		default: "full",
		type: String,
		choices: {
			"full": game.i18n.localize('wod.settings.observersfullsheet'),
			"limited": game.i18n.localize('wod.settings.observerspartialsheet')
		}
	});

    game.settings.register("worldofdarkness", "limitedFullActorViewPermission", {
		name: game.i18n.localize('wod.settings.limitedactorpermission'),
		hint: game.i18n.localize('wod.settings.limitedactorpermissionhint'),
		scope: "world",
		config: false,
		default: "limited",
		type: String,
		choices: {
			"full": game.i18n.localize('wod.settings.limitedfullsheet'),
			"limited": game.i18n.localize('wod.settings.limitedpartialsheet'),
            "mini": game.i18n.localize('wod.settings.minipartialsheet')
		}
	});

	game.settings.register("worldofdarkness", "changeActorImagePermission", {
		name: game.i18n.localize('wod.settings.changeactorimage'),
		hint: game.i18n.localize('wod.settings.changeactorimagehint'),
		scope: "world",
		config: false,
		default: true,
		type: Boolean,
	});

	game.settings.register("worldofdarkness", "changeItemImagePermission", {
		name: game.i18n.localize('wod.settings.changeitemimage'),
		hint: game.i18n.localize('wod.settings.changeitemimagehint'),
		scope: "world",
		config: false,
		default: false,
		type: Boolean,
	});

	game.settings.register("worldofdarkness", "itemAdministratorLevel", {
		name: game.i18n.localize('wod.settings.itemadministrator'),
		hint: game.i18n.localize('wod.settings.itemadministratorhint'),
		scope: "world",
		config: false,
		default: "gm",
		type: String,
		choices: {
            "player": game.i18n.localize('wod.settings.player'),
			"trusted": game.i18n.localize('wod.settings.trustedplayer'),
			"assistant": game.i18n.localize('wod.settings.assistantgm'),
			"gm": "GM"
		}
	});

    // END PERMISSION SETTINGS

    // GRAPHIC SETTINGS

    game.settings.register("worldofdarkness", "useSplatFonts", {
		name: game.i18n.localize('wod.settings.usesplatfont'),
		hint: game.i18n.localize('wod.settings.usesplatfonthint'),
		scope: "world",
		config: false,
		default: true,
		type: Boolean,
	});

    game.settings.register("worldofdarkness", "useLinkPlatform", {
		name: game.i18n.localize('wod.settings.usesworldanvil'),
		hint: game.i18n.localize('wod.settings.usesworldanvilhint'),
		scope: "world",
		config: false,
		default: false,
		type: Boolean,
	});

	/* patch settings */
	game.settings.register("worldofdarkness", "patch107", {
		name: "patch107",
		hint: "patch107",
		scope: "world",
		config: false,
		default: true,
		type: Boolean,
	});

	game.settings.register("worldofdarkness", "patch110", {
		name: "patch110",
		hint: "patch110",
		scope: "world",
		config: false,
		default: false,
		type: Boolean,
	});

	game.settings.register("worldofdarkness", "patch120", {
		name: "patch120",
		hint: "patch120",
		scope: "world",
		config: false,
		default: false,
		type: Boolean,
	});

    game.settings.register("worldofdarkness", "patch130", {
		name: "patch130",
		hint: "patch130",
		scope: "world",
		config: false,
		default: false,
		type: Boolean,
	});

    game.settings.register("worldofdarkness", "patch140", {
		name: "patch140",
		hint: "patch140",
		scope: "world",
		config: false,
		default: false,
		type: Boolean,
	});

    game.settings.register("worldofdarkness", "patch150", {
		name: "patch150",
		hint: "patch150",
		scope: "world",
		config: false,
		default: false,
		type: Boolean,
	});

    game.settings.register("worldofdarkness", "patch160", {
		name: "patch160",
		hint: "patch160",
		scope: "world",
		config: false,
		default: false,
		type: Boolean,
	});

    game.settings.register("worldofdarkness", "patch210", {
		name: "patch210",
		hint: "patch210",
		scope: "world",
		config: false,
		default: false,
		type: Boolean,
	});

    game.settings.register("worldofdarkness", "patch220", {
		name: "patch220",
		hint: "patch220",
		scope: "world",
		config: false,
		default: false,
		type: Boolean,
	});

    game.settings.register("worldofdarkness", "patch230", {
		name: "patch230",
		hint: "patch230",
		scope: "world",
		config: false,
		default: false,
		type: Boolean,
	});

    game.settings.register("worldofdarkness", "patch300", {
		name: "patch300",
		hint: "patch300",
		scope: "world",
		config: false,
		default: false,
		type: Boolean,
	});

    /* Groups of settings */
    game.settings.registerMenu("worldofdarkness", "ruleSettings", {
        name: game.i18n.localize('wod.settings.rulesettings'),
        hint: game.i18n.localize('wod.settings.rulesettingshint'),
        label: game.i18n.localize('wod.settings.rulesettings'),
        icon: "icon fa-solid fa-gear",
        type: Rules,
        restricted: true,
    });

    game.settings.registerMenu("worldofdarkness", "diceSettings", {
        name: "LANG: Rolling dices rules",
        hint: "LANG: How the system handles rolling the dices",
        label: "LANG: Rolling dices rules",
        icon: "icon fa-solid fa-gear",
        type: Dices,
        restricted: true,
    });

    game.settings.registerMenu("worldofdarkness", "hunterSettings", {
        name: game.i18n.localize('wod.settings.huntersettings'),
        hint: game.i18n.localize('wod.settings.huntersettingshint'),
        label: game.i18n.localize('wod.settings.huntersettings'),
        icon: "icon fa-solid fa-gear",
        type: Hunter,
        restricted: true,
    });

    game.settings.registerMenu("worldofdarkness", "werewolfSettings", {
        name: game.i18n.localize('wod.settings.werewolfsettings'),
        hint: game.i18n.localize('wod.settings.werewolfsettingshint'),
        label: game.i18n.localize('wod.settings.werewolfsettings'),
        icon: "icon fa-solid fa-gear",
        type: Werewolf,
        restricted: true,
    });

	game.settings.registerMenu("worldofdarkness", "permissionSettings", {
        name: game.i18n.localize('wod.settings.permissionsettings'),
        hint: game.i18n.localize('wod.settings.permissionsettingshint'),
        label: game.i18n.localize('wod.settings.permissionsettings'),
        icon: "icon fa-solid fa-gear",
        type: Permissions,
        restricted: true,
    });

    game.settings.registerMenu("worldofdarkness", "graphicSettings", {
        name: game.i18n.localize('wod.settings.graphicsettings'),
        hint: game.i18n.localize('wod.settings.graphicsettingshint'),
        label: game.i18n.localize('wod.settings.graphicsettings'),
        icon: "icon fa-solid fa-gear",
        type: Graphics,
        restricted: true,
    });
};

export class Rules extends FormApplication {
    /** @override */
    static get defaultOptions() {
        return mergeObject(super.defaultOptions, {
            id: "rules",
            classes: ["wod20 wod-dialog rule-dialog"],
            title: game.i18n.localize('wod.settings.rulesettings'),
            template: "systems/worldofdarkness/templates/dialogs/dialog-settings-rule.html",
        });
    }
  
    getData(options) {
        const hasPermission = game.user.can("SETTINGS_MODIFY");  
        const data = {
            system: { 
                title: game.system.title, 
                menus: [], 
                settings: [] 
            }
        };

        // Classify all settings
        if (hasPermission) {
            for (let s of game.settings.settings.values()) {
                // Exclude settings the user cannot change
                if ((s.key == "advantageRolls") || (s.key == "attributeSettings")) {
                    // Update setting data
                    const setting = duplicate(s);

                    setting.name = game.i18n.localize(setting.name);
                    setting.hint = game.i18n.localize(setting.hint);
                    setting.value = game.settings.get("worldofdarkness", setting.key);
                    setting.type = s.type instanceof Function ? s.type.name : "String";
                    setting.scope = "worldofdarkness";
                    setting.isBoolean = s.type === Boolean;
                    setting.isSelect = s.choices !== undefined;

                    data.system.settings.push(setting);
                } 
            }
        }
  
        // Return data
        return {
            user: game.user,
            canConfigure: hasPermission,
            systemTitle: game.system.title,
            data: data
        };
    }
  
    activateListeners(html) {
        super.activateListeners(html);
        html.find(".submenu button").click(this._onClickSubmenu.bind(this));
    }
  
    /**
     * Handle activating the button to configure User Role permissions
     * @param event {Event} The initial button click event
     * @private
     */
    _onClickSubmenu(event) {
        event.preventDefault();
        const menu = game.settings.menus.get(event.currentTarget.dataset.key);
        if (!menu) return ui.notifications.error("No submenu found for the provided key");
        const app = new menu.type();
        return app.render(true);
    }
  
    /** @override */
    async _updateObject(event, formData) {
        for (let [k, v] of Object.entries(flattenObject(formData))) {
            let s = game.settings.settings.get(k);
            let current = game.settings.get("worldofdarkness", s.key);

            if (v !== current) {
                await game.settings.set("worldofdarkness", s.key, v);
            }
        }
    }
}

export class Dices extends FormApplication {
    /** @override */
    static get defaultOptions() {
        return mergeObject(super.defaultOptions, {
            id: "dices",
            classes: ["wod20 wod-dialog rule-dialog"],
            title: "LANG: Roll settings",
            template: "systems/worldofdarkness/templates/dialogs/dialog-settings-dice.html",
        });
    }
  
    getData(options) {
        const hasPermission = game.user.can("SETTINGS_MODIFY");  
        const data = {
            system: { 
                title: game.system.title, 
                menus: [], 
                settings: [] 
            }
        };

        // Classify all settings
        if (hasPermission) {
            for (let s of game.settings.settings.values()) {
                // Exclude settings the user cannot change
                if ((s.key == "theRollofOne") || (s.key == "lowestDifficulty") || (s.key == "specialityAddSuccess") || (s.key == "specialityReduceDiff") || (s.key == "tenAddSuccess") || (s.key == "explodingDice"))  {
                    // Update setting data
                    const setting = duplicate(s);

                    setting.name = game.i18n.localize(setting.name);
                    setting.hint = game.i18n.localize(setting.hint);
                    setting.value = game.settings.get("worldofdarkness", setting.key);
                    setting.type = s.type instanceof Function ? s.type.name : "String";
                    setting.scope = "worldofdarkness";
                    setting.isBoolean = s.type === Boolean;
                    setting.isSelect = s.choices !== undefined;

                    data.system.settings.push(setting);
                } 
            }
        }
  
        // Return data
        return {
            user: game.user,
            canConfigure: hasPermission,
            systemTitle: game.system.title,
            data: data
        };
    }
  
    activateListeners(html) {
        super.activateListeners(html);
        html.find(".submenu button").click(this._onClickSubmenu.bind(this));
    }
  
    /**
     * Handle activating the button to configure User Role permissions
     * @param event {Event} The initial button click event
     * @private
     */
    _onClickSubmenu(event) {
        event.preventDefault();
        const menu = game.settings.menus.get(event.currentTarget.dataset.key);
        if (!menu) return ui.notifications.error("No submenu found for the provided key");
        const app = new menu.type();
        return app.render(true);
    }
  
    /** @override */
    async _updateObject(event, formData) {
        for (let [k, v] of Object.entries(flattenObject(formData))) {
            let s = game.settings.settings.get(k);
            let current = game.settings.get("worldofdarkness", s.key);

            if (v !== current) {
                await game.settings.set("worldofdarkness", s.key, v);
            }
        }
    }
}

export class Hunter extends FormApplication {
    /** @override */
    static get defaultOptions() {
        return mergeObject(super.defaultOptions, {
            id: "hunter",
            classes: ["wod20 wod-dialog rule-dialog"],
            title: "LANG: Hunter the Reckoning settings",
            template: "systems/worldofdarkness/templates/dialogs/dialog-settings-rule.html",
        });
    }
  
    getData(options) {
        const hasPermission = game.user.can("SETTINGS_MODIFY");  
        const data = {
            system: { 
                title: game.system.title, 
                menus: [], 
                settings: [] 
            }
        };

        // Classify all settings
        if (hasPermission) {
            for (let s of game.settings.settings.values()) {
                // Exclude settings the user cannot change
                if ((s.key == "hunteredgeSettings")) {
                    // Update setting data
                    const setting = duplicate(s);

                    setting.name = game.i18n.localize(setting.name);
                    setting.hint = game.i18n.localize(setting.hint);
                    setting.value = game.settings.get("worldofdarkness", setting.key);
                    setting.type = s.type instanceof Function ? s.type.name : "String";
                    setting.scope = "worldofdarkness";
                    setting.isBoolean = s.type === Boolean;
                    setting.isSelect = s.choices !== undefined;

                    data.system.settings.push(setting);
                } 
            }
        }
  
        // Return data
        return {
            user: game.user,
            canConfigure: hasPermission,
            systemTitle: game.system.title,
            data: data
        };
    }
  
    activateListeners(html) {
        super.activateListeners(html);
        html.find(".submenu button").click(this._onClickSubmenu.bind(this));
    }
  
    /**
     * Handle activating the button to configure User Role permissions
     * @param event {Event} The initial button click event
     * @private
     */
    _onClickSubmenu(event) {
        event.preventDefault();
        const menu = game.settings.menus.get(event.currentTarget.dataset.key);
        if (!menu) return ui.notifications.error("No submenu found for the provided key");
        const app = new menu.type();
        return app.render(true);
    }
  
    /** @override */
    async _updateObject(event, formData) {
        for (let [k, v] of Object.entries(flattenObject(formData))) {
            let s = game.settings.settings.get(k);
            let current = game.settings.get("worldofdarkness", s.key);

            if (v !== current) {
                await game.settings.set("worldofdarkness", s.key, v);
            }
        }
    }
}

export class Werewolf extends FormApplication {
    /** @override */
    static get defaultOptions() {
        return mergeObject(super.defaultOptions, {
            id: "werewolf",
            classes: ["wod20 wod-dialog rule-dialog"],
            title: "LANG: Werewolf the Apocalypse settings",
            template: "systems/worldofdarkness/templates/dialogs/dialog-settings-rule.html",
        });
    }
  
    getData(options) {
        const hasPermission = game.user.can("SETTINGS_MODIFY");  
        const data = {
            system: { 
                title: game.system.title, 
                menus: [], 
                settings: [] 
            }
        };

        // Classify all settings
        if (hasPermission) {
            for (let s of game.settings.settings.values()) {
                // Exclude settings the user cannot change
                if ((s.key == "wererwolfrageSettings")) {
                    // Update setting data
                    const setting = duplicate(s);

                    setting.name = game.i18n.localize(setting.name);
                    setting.hint = game.i18n.localize(setting.hint);
                    setting.value = game.settings.get("worldofdarkness", setting.key);
                    setting.type = s.type instanceof Function ? s.type.name : "String";
                    setting.scope = "worldofdarkness";
                    setting.isBoolean = s.type === Boolean;
                    setting.isSelect = s.choices !== undefined;

                    data.system.settings.push(setting);
                } 
            }
        }
  
        // Return data
        return {
            user: game.user,
            canConfigure: hasPermission,
            systemTitle: game.system.title,
            data: data
        };
    }
  
    activateListeners(html) {
        super.activateListeners(html);
        html.find(".submenu button").click(this._onClickSubmenu.bind(this));
    }
  
    /**
     * Handle activating the button to configure User Role permissions
     * @param event {Event} The initial button click event
     * @private
     */
    _onClickSubmenu(event) {
        event.preventDefault();
        const menu = game.settings.menus.get(event.currentTarget.dataset.key);
        if (!menu) return ui.notifications.error("No submenu found for the provided key");
        const app = new menu.type();
        return app.render(true);
    }
  
    /** @override */
    async _updateObject(event, formData) {
        for (let [k, v] of Object.entries(flattenObject(formData))) {
            let s = game.settings.settings.get(k);
            let current = game.settings.get("worldofdarkness", s.key);

            if (v !== current) {
                await game.settings.set("worldofdarkness", s.key, v);
            }
        }
    }
}

export class Permissions extends FormApplication {
    /** @override */
    static get defaultOptions() {
        return mergeObject(super.defaultOptions, {
            id: "permission",
            classes: ["wod20 wod-dialog permission-dialog"],
            title: game.i18n.localize('wod.settings.permissionsettings'),
            template: "systems/worldofdarkness/templates/dialogs/dialog-settings-rule.html",
        });
    }
  
    getData(options) {
        const hasPermission = game.user.can("SETTINGS_MODIFY");  
        const data = {
            system: { 
                title: game.system.title, 
                menus: [], 
                settings: [] 
            }
        };

        // Classify all settings
        if (hasPermission) {
            for (let s of game.settings.settings.values()) {
                // Exclude settings the user cannot change
                if ((s.key == "changeActorImagePermission") || (s.key == "changeItemImagePermission") || (s.key == "itemAdministratorLevel") || (s.key == "observersFullActorViewPermission") || (s.key == "limitedFullActorViewPermission")) {
                    // Update setting data
                    const setting = duplicate(s);

                    setting.name = game.i18n.localize(setting.name);
                    setting.hint = game.i18n.localize(setting.hint);
                    setting.value = game.settings.get("worldofdarkness", setting.key);
                    setting.type = s.type instanceof Function ? s.type.name : "String";
                    setting.scope = "worldofdarkness";
                    setting.isBoolean = s.type === Boolean;
                    setting.isSelect = s.choices !== undefined;

                    data.system.settings.push(setting);
                } 
            }
        }
  
        // Return data
        return {
            user: game.user,
            canConfigure: hasPermission,
            systemTitle: game.system.title,
            data: data
        };
    }
  
    activateListeners(html) {
        super.activateListeners(html);
        html.find(".submenu button").click(this._onClickSubmenu.bind(this));
    }
  
    /**
     * Handle activating the button to configure User Role permissions
     * @param event {Event} The initial button click event
     * @private
     */
    _onClickSubmenu(event) {
        event.preventDefault();
        const menu = game.settings.menus.get(event.currentTarget.dataset.key);
        if (!menu) return ui.notifications.error("No submenu found for the provided key");
        const app = new menu.type();
        return app.render(true);
    }
  
    /** @override */
    async _updateObject(event, formData) {
        for (let [k, v] of Object.entries(flattenObject(formData))) {
            let s = game.settings.settings.get(k);
            let current = game.settings.get("worldofdarkness", s.key);

            if (v !== current) {
                await game.settings.set("worldofdarkness", s.key, v);
            }
        }
    }
}

export class Graphics extends FormApplication {
    /** @override */
    static get defaultOptions() {
        return mergeObject(super.defaultOptions, {
            id: "graphics",
            classes: ["wod20 wod-dialog graphics-dialog"],
            title: game.i18n.localize('wod.settings.graphicsettings'),
            template: "systems/worldofdarkness/templates/dialogs/dialog-settings-rule.html",
        });
    }
  
    getData(options) {
        const hasPermission = game.user.can("SETTINGS_MODIFY");  
        const data = {
            system: { 
                title: game.system.title, 
                menus: [], 
                settings: [] 
            }
        };

        // Classify all settings
        if (hasPermission) {
            for (let s of game.settings.settings.values()) {
                // Exclude settings the user cannot change
                if ((s.key == "useSplatFonts") || (s.key == "useLinkPlatform")) {
                    // Update setting data
                    const setting = duplicate(s);

                    setting.name = game.i18n.localize(setting.name);
                    setting.hint = game.i18n.localize(setting.hint);
                    setting.value = game.settings.get("worldofdarkness", setting.key);
                    setting.type = s.type instanceof Function ? s.type.name : "String";
                    setting.scope = "worldofdarkness";
                    setting.isBoolean = s.type === Boolean;
                    setting.isSelect = s.choices !== undefined;

                    data.system.settings.push(setting);
                } 
            }
        }
  
        // Return data
        return {
            user: game.user,
            canConfigure: hasPermission,
            systemTitle: game.system.title,
            data: data
        };
    }
  
    activateListeners(html) {
        super.activateListeners(html);
        html.find(".submenu button").click(this._onClickSubmenu.bind(this));
    }
  
    /**
     * Handle activating the button to configure User Role permissions
     * @param event {Event} The initial button click event
     * @private
     */
    _onClickSubmenu(event) {
        event.preventDefault();
        const menu = game.settings.menus.get(event.currentTarget.dataset.key);
        if (!menu) return ui.notifications.error("No submenu found for the provided key");
        const app = new menu.type();
        return app.render(true);
    }
  
    /** @override */
    async _updateObject(event, formData) {
        for (let [k, v] of Object.entries(flattenObject(formData))) {
            let s = game.settings.settings.get(k);
            let current = game.settings.get("worldofdarkness", s.key);

            if (v !== current) {
                await game.settings.set("worldofdarkness", s.key, v);
            }
        }
    }
}