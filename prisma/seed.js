import { PrismaClient } from '@prisma/client'
const db = new PrismaClient()

async function seed() {
    await Promise.all(
        getPosts().map((post) => {
            return db.post.create({ data: post })
        })
    )
}

seed();

function getPosts() {
    return [
        { title: "Look at him smoll", body: "This is the first post", img: '/cat/1.jpeg'},
        { title: "Look at him fancy", body: "This is the second post", img: '/cat/2.jpeg' },
        { title: "Look at him waiting for food", body: "This is the third post", img: '/cat/3.jpeg' },
    ];
}
