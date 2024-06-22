const { PrismaClient } = require('@prisma/client');
const express = require('express')
const prisma = new PrismaClient()
const app = express()
const cors = require('cors')
const PORT = process.env.PORT || 3000;

/*one im working on */
app.use(express.json());
app.use(cors());

app.get('/boards', async (req, res) => {
    const boards = await prisma.board.findMany()
    res.json(boards);
});

app.get('/boards/filter/:category', async (req, res) => {
    const { category } = req.params
    
    const boards = await prisma.board.findMany(
    {
        where: { category: category },
    });
    res.status(200).json(boards);
});

app.get('/boards/recent', async (req, res) => {
    const boards = await prisma.board.findMany()
    boards.sort((a, b) => b.id - a.id);
    res.json(boards);
});


app.get('/boards/:id', async (req, res) => {
        const { id } = req.params
        const boards = await prisma.board.findUnique(
        {
            where: { id: parseInt(id) },
        });
        res.status(200).json(boards);
    });

app.get('/boards/query/:query', async (req, res) => {
    const { query } = req.params
    const boards = await prisma.board.findMany({
        where: { title: {
            contains: query,
            mode: 'insensitive'
        }}
    });
    res.status(200).json(boards);
});

app.post('/boards', async (req, res) => {
    const { img, title, author, description, category } = req.body;
    const newBoard = await prisma.board.create({
        data: {
            img,
            title,
            author,
            description,
            category
        }
        })
        res.status(201).json(newBoard);
});

app.delete('/boards/:id', async (req, res) => {
    const { id } = req.params

    const deletedBoard = await prisma.board.delete({
        where: { id: parseInt(id) }
    })
    res.json(deletedBoard)
});

app.get('/cards', async (req, res) => {
    const cards = await prisma.card.findMany();
    res.json(cards)
});

app.get('/cards/:id', async (req, res) => {
    const { id } = req.params
    const cards = await prisma.card.findUnique(
        {
            where: { id: parseInt(id) },
        });
        res.status(200).json(cards);
    });

app.put('/cards/:id', async (req, res) => {
        const { id } = req.params
        const { upvotes } = req.body
        const updatedCard = await prisma.card.update({
          where: { id: parseInt(id) },
          data: {
            upvotes
          }
        })
        res.json(updatedCard)
});

app.get('/boards/:id/cards', async (req, res) => {
    const { id } = req.params

    const board_cards = await prisma.card.findMany({
        where: {
            boardId: parseInt(id),
        },
    });
    res.json(board_cards)
}); 

app.post('/boards/cards', async (req, res) => {
    const {id, message, img, author, upvotes, boardId} = req.body;
    const newCard = await prisma.card.create({
        data: {
            id,
            message,
            img,
            author,
            boardId
        }
    })
    res.status(201).json(newCard)
});

app.delete('/cards/:id', async (req, res) => {
    const { id } = req.params

    const deletedCard = await prisma.card.delete({
        where: { id: parseInt(id) }
    })
    res.json(deletedCard)
});

const server = app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
});