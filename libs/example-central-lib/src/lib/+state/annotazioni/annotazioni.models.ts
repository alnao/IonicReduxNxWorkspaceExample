/**
 * Interface for the 'Annotazioni' data
 */
export interface AnnotazioniEntity {
  id: string | number | null | any; // Primary ID
  nome: string;
  descrizione: string;
  tipo : string;
  stato : string;
  fase : string;
  datainserimento: string;
  utenteinserimento: string;
  datamodifica: string;
  utentemodifica: string;
}
