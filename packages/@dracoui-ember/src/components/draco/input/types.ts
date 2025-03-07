export enum DracoInputSizeValues {
  Small = 'small',
  Medium = 'medium',
  Large = 'large'
};
export type DracoInputSizes = `${DracoInputSizeValues}`;

export enum DracoInputIconPositionValues {
  Leading = 'leading',
  Trailing = 'trailing'
};
export type DracoInputIconPositions = `${DracoInputIconPositionValues}`;

export enum DracoInputTypeValues {
  Tel = 'tel',
  Url = 'url',
  Date = 'date',
  Week = 'week',
  Time = 'time',
  Text = 'text',
  Email = 'email',
  Month = 'month',
  Search = 'search',
  Password = 'password',
  DateTimeLocal = 'datetime-local'
};
export type DracoInputTypes = `${DracoInputTypeValues}`;