
export interface ColorRGB {
  r: number;
  g: number;
  b: number;
}

export interface ColorRGBA extends ColorRGB {
  a: number;
}

export type IColorProperty = string | ColorRGB | ColorRGBA;

export type BorderTypes = 'solid' | 'dotted' | 'dashed' | 'double' | 'groove' | 'ridge' | 'inset' | 'outset';

export interface BorderSideAttributes {
  width: number;
  type: BorderTypes;
  color: IColorProperty;
}

export interface IBorderProperty {

  top: BorderSideAttributes;
  left: BorderSideAttributes;
  right: BorderSideAttributes;
  bottom: BorderSideAttributes;

}

export interface SidesNumber {

  top: number;
  left: number;
  right: number;
  bottom: number;

}

export interface CornersNumber {

  topLeft: number;
  topRight: number;
  bottomLeft: number;
  bottomRight: number;

}

export interface IShadowProperty {

  horizontal: number;
  vertical: number;
  blur: number;
  spread?: number;
  color: IColorProperty;
  inset: boolean;

}
