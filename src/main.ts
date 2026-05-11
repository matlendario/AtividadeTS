import { produto } from "./produto";
import { fabricante } from "./fabricante";
import { endereco } from "./endereco";
import express, { Request, Response } from "express";

const produtos: produto[] = [];
const app = express();
app.use(express.json());

function novoProduto(req: Request, res: Response) {
    try {
        let data: any = req.body;

        if (
            !data.nome ||
            !data.preco ||
            !data.fabricante ||
            !data.fabricante.nome ||
            !data.fabricante.endereco ||
            !data.fabricante.endereco.cidade ||
            !data.fabricante.endereco.pais
        ) {
            throw new Error("Requer nome, preco e fabricante completo");
        }

        const novoEndereco = new endereco(
            data.fabricante.endereco.cidade,
            data.fabricante.endereco.pais,
        );

        const novoFabricante = new fabricante(
            data.fabricante.nome,
            novoEndereco,
        );

        const novoProd = new produto(
            data.nome,
            data.preco,
            novoFabricante,
            data.id,
        );

        produtos.push(novoProd);

        res.status(200).json(novoProd);
    } catch (error: unknown) {
        res.status(400).json({ error: (error as Error).message });
    }
}

function listarProdutos(req: Request, res: Response) {
    try {
        res.status(200).json(produtos);
    } catch (error: unknown) {
        res.status(500).json({ error: (error as Error).message });
    }
}

function buscarProduto(req: Request, res: Response) {
    try {
        const prod = produtos.find(p => p.id === Number(req.params.id));

        if (!prod) {
            throw new Error("Produto não encontrado");
        }

        res.status(200).json(prod);
    } catch (error: unknown) {
        res.status(404).json({ error: (error as Error).message });
    }
}

function atualizarProduto(req: Request, res: Response) {
    try {
        const index = produtos.findIndex(p => p.id === Number(req.params.id));

        if (index === -1) {
            throw new Error("Produto não encontrado");
        }

        produtos[index] = { ...produtos[index], ...req.body };

        res.status(200).json(produtos[index]);
    } catch (error: unknown) {
        res.status(404).json({ error: (error as Error).message });
    }
}

function deletarProduto(req: Request, res: Response) {
    try {
        const index = produtos.findIndex(p => p.id === Number(req.params.id));

        if (index === -1) {
            throw new Error("Produto não encontrado");
        }

        const removido = produtos.splice(index, 1);

        res.status(200).json(removido[0]);
    } catch (error: unknown) {
        res.status(404).json({ error: (error as Error).message });
    }
}

app.post("/produtos", novoProduto);
app.get("/produtos", listarProdutos);
app.get("/produtos/:id", buscarProduto);
app.put("/produtos/:id", atualizarProduto);
app.delete("/produtos/:id", deletarProduto);

app.listen(3000, () => console.log("Servidor rodando na porta 3000"));
