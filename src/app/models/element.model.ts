import {IBorderProperty, SidesNumber, IColorProperty, IShadowProperty, CornersNumber} from './element-properties.model';

export interface IElement {

  width: number;
  height: number;

  autoWidth: boolean;
  autoHeight: boolean;

  color?: IColorProperty;

  margin: SidesNumber;
  padding: SidesNumber;
  border: IBorderProperty;

  background?: IColorProperty;

  borderRadius: CornersNumber;

  shadow?: IShadowProperty;

  opacity?: number;

}
