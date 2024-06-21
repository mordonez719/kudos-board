const { PrismaClient } = require('@prisma/client');
const express = require('express')
const prisma = new PrismaClient()
const app = express()
const cors = require('cors')
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

app.get("/boards", async (req, res) => {
    const boards = await prisma.board.findMany()
    res.status(200).json(boards);
});

// app.get("/boards", async (req, res) => {
//     let query = 'SELECT * FROM boards'
//     const queryParams = []
//     const conditions = []

//     if (req.query.category){
//         queryParams.push(req.query.category)
//         conditions.push(`genre=$${queryParams.length}`)
//     }

//     if (conditions.length > 0) {
//         query += ' WHERE ' + conditions.join(' AND ')
//     }

//     try {
//         const { rows } = await db.query(query, queryParams)
//         res.json(rows)
//     } catch (error) {
//         console.error(error)
//         res.status(500).send('Server Error')
//     }
//     // const boards = await prisma.board.findMany()
//     // res.status(200).json(boards);
// });

app.get("/boards/:id", async (req, res) => {
        const { id } = req.params
        const boards = await prisma.board.findUnique(
        {
            where: { id: parseInt(id) },
        });
        res.status(200).json(boards);
    });

app.post("/boards", async (req, res) => {
    const { img, title, author, description, category } = req.body;
    const newBoard = await prisma.board.create({
        data: {
            img,
            title,
            author,
            // category,
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
})

const server = app.listen(PORT, () => {
    console.log(`Server is running on http://localhost;${PORT}`)
});

// app.get("/books:id", async (req, res) => {
//     const id = parseInt(req.params.id)
//     const book = await prisma.book.findUnique()
// })

// app.post("/books", async (req, res) => {
//     const {title, author} = req.body;
//     const newBook = await prisma.book.create(
//         data: {
//             title,
//             author
//         }
//         }
// })

// app.listen(PORT, () => {
//     console.log(`Server is running on http://localhost:${PORT}`)
//   })

// app.get('/', (req, res) => {
//     res.send(App())
// })