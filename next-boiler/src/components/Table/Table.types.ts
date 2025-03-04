export interface TableColumn {
  key: string;
  label: string;
  className?: string;
}

export interface TableAction {
  label: string;
  icon?: JSX.Element;
  onClick: (rowData: any) => void;
}

export interface TableProps {
  columns?: TableColumn[];
  data?: Record<string, any>[];
  showIcons?: {
    edit?: boolean;
    delete?: boolean;
    photos?: boolean;
    download?: boolean;
  };
  actions?: TableAction[];
  emptyMessage?: string;
}
