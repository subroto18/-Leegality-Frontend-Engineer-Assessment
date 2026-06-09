export interface ExpandableFilterSectionProps<T> {
  items: T[];
  limit?: number;
  renderItem: (item: T) => React.ReactNode;
}
