export interface Pokemon {
  id: number;
  name: string;
  url: string;
  info: {
    abilities: Abilities[];
    base_experience?: number;
    forms?: Array<object>;
    game_indices?: Array<object>;
    height?: number;
    held_items?: Array<any>;
    id: number;
    is_default?: boolean;
    location_area_encounters?: string;
    moves: Array<object>;
    name: string;
    order?: number;
    species?: Array<object>;
    sprites?: Sprites;
    stats?: Array<object>;
    types?: Array<object>;
    weight?: number;
  };

}

export interface Sprites {
  back_default?: string | null;
  back_female?: string | null;
  back_shiny?: string | null;
  back_shiny_female?: string | null;
  front_default?: string | null;
  front_female?: string | null;
  front_shiny?: string | null;
  front_shiny_female?: string | null;
}

export interface Abilities {
  ability: Ability;
}

export interface Ability {
  name: string;
  url: string;
}
