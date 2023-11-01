import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./User";

const { v4: uuid } = require("uuid");

@Entity()
export class CalculosLote {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    numeroDoProcesso: string;
    @Column()
    nome: string;
    @Column()
    dataDeAjuizamento: string;
    @Column()
    cpf: string;
    @Column()
    termoInicial: string;
    @Column()
    termoFinal: string;
    @Column({ type: "float" })
    rmi: number;
    @Column()
    beneficio: string;
    @Column()
    numeroDoBeneficio: string;
    @Column()
    dataDePagamento: string;
    @Column()
    citacao: string;
    @Column({nullable: true})
    aps: string;
    @Column()
    recebeuBeneficio: boolean;
    @Column("text", { array: true, nullable: true })
    nomeBeneficioBeneficioAcumulado?: string[];
    @Column("text", { array: true, nullable: true })
    dataDeInicioBeneficioAcumulado?: string[];
    @Column("text", { array: true, nullable: true })
    dataFinalBeneficioAcumulado?: string[];
    @Column("text", { array: true, nullable: true })
    rmilBeneficioAcumulado?: string[];
    @Column()
    inicioJuros: string;
    @Column({ nullable: true })
    dib?: string;
    @Column()
    salario13Obrigatorio: boolean;
    @Column("text", { array: true })
    data: string[];
    @Column("float", { array: true })
    reajusteAcumulado: number[];
    @Column("float", { array: true })
    devido: number[];
    @Column("float", { array: true })
    reajusteRecebido: number[];
    @Column("float", { array: true })
    recebido: number[];
    @Column("float", { array: true })
    salario: number[];
    @Column("float", { array: true })
    correcao: number[];
    @Column("float", { array: true })
    salarioCorrigido: number[];
    @Column("float", { array: true })
    juros: number[];
    @Column("float", { array: true })
    salarioJuros: number[];
    @Column("float", { array: true })
    salarioTotal: number[];
    @Column({ type: "float" })
    pacelasVencidas: number;
    @Column({ type: "float" })
    total_processos: number;
    @Column({ type: "float" })
    valor_total: number;
    @Column({ type: "float" })
    valor_juros: number;
    @Column({ type: "float" })
    valor_corrigido: number;
    @Column({ type: "float" })
    valorHonorarios: number;
    @Column({ type: "float" })
    iPvalorAnoAnterior: number;
    @Column({ type: "float" })
    iPvalorAnoAtual: number;
    @Column({ type: "float" })
    competenciaAnoAnterior: number;
    @Column({ type: "float" })
    competenciaAnoAtual: number;
    @Column({ type: "float" })
    porcentagemRMI: number;
    @Column({ nullable: true })
    honorarioAdvocativosData?: string;
    @Column({ type: "float", nullable: true })
    honorariosAdvocativos?: number;
    @Column({ nullable: true })
    textoHonorarios?: string;
    @Column({ nullable: true })
    decricaoJuros?: string;
    @Column({ nullable: true })
    descricaoCorrecao?: string;
    @Column({ type: "float" })
    alcadaValor: number;
    @Column({ type: "float" })
    salariominimosAlcada: number;
    @Column({ type: "float" })
    alcadaJuros: number;
    @Column({ type: "float" })
    alcadaCorrecao: number;
    @Column({ type: "float" })
    alcadaTotal: number;
    @Column()
    textoPeriodoAlcada?: string;
    @Column({ type: "float" })
    alcadaJurosPorcentagem?: number;
    @Column({ type: "float" })
    alcadaCorrecaoPorcetagem?: number;
    @Column({ type: "float", nullable: true })
    acordo?: number;
    @Column({ type: "int" })
    tipoJuros: number;
    @Column({ type: "int" })
    tipoCorrecao: number;
    @Column()
    possuiDecimoTerceiro?: boolean;
    @Column()
    possuiJuros?: boolean;
    @Column()
    alcada?: boolean;
    @Column()
    salarioMinimo?: boolean;
    @Column()
    limiteMinimoMaximo?: boolean;
    @Column({ type: "int" })
    usuario?: number;
    @Column()
    atualizacao: string;
    @Column({ nullable: true })
    dibAnterior?: string;
    @Column()
    url?: string;
    @Column()
    tipo?: string;
    @Column("float", { array: true, nullable: true })
    porcentagemRmiBeneficioAcumulado?: number[];
    @Column("boolean", { array: true, nullable: true })
    salario13ObrigatorioBeneficioAcumulado?: boolean[];
    @Column("boolean", { array: true, nullable: true })
    salario13BeneficioAcumulado?: boolean[];
    @Column("boolean", { array: true, nullable: true })
    salarioMinimoBeneficioAcumulado?: boolean[];
    @Column("boolean", { array: true, nullable: true })
    limiteMinimoMaximoBeneficioAcumulado?: boolean[];
    @Column("boolean", { nullable: true })
    selic?: boolean;
    @Column({ length: 99999, nullable: false, })
    conteudoHTML: string;

    @ManyToOne(() => User, { onDelete: 'CASCADE', eager: true })
    @JoinColumn()
    idUser: User;

    constructor(props: Omit<CalculosLote, "id">, id?: string) {
        Object.assign(this, props);

        if (!id) {
            this.id = uuid();
        } else {
            this.id = id;
        }
    }
}

