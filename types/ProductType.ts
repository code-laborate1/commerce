export type ProductType = {
  id: string
  name: string;
  image: string;
  quantity?: number | 1;
  unit_amount: number | null;
  description: string | null
  metadata: MetadataType
};

type MetadataType = {
  features: string
}