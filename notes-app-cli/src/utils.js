

export const listNotes = notes => {
    notes.forEach((note) => {
        console.log('id: ', note.id);
        console.log('tags: ', note.tags);
        console.log('content: ', note.content);
        console.log('\n');



    })
}