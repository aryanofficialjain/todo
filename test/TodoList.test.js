const TodoList = artifacts.require("./TodoList.sol")

contract('TodoList', (accounts) => {
    before(async () => {
        this.todoList = await TodoList.deployed();

    })

    it('deploys successfully', async () => {
        const address = await this.todoList.address
        assert.notEqual(address, 0x0)
        assert.notEqual(address, '')
        assert.notEqual(address, null)
        assert.notEqual(address, undefined)

    })

    it('list tasks', async () => {
        const taskcount = await this.todoList.taskCount()
        const task = await this.todoList.tasks(taskcount)
        assert.equal(task.id.toNumber(), taskcount.toNumber())
        assert.equal(task.content, 'Made by Bryan Fury')
        assert.equal(task.completed, false)
        assert.equal(taskcount.toNumber(), 1)

    })
})