class chain {
        constructor(bodyA,bodyB){
        var options = {
            bodyA:Bird.body,
            bodyB:constrainedlog.body,
            stiffness: 0.04,
            length: 10
    
        }
        var chain = Constraint.Create(options)
    
        World.add(world.chain)
    }
    display() {
   var pointA = this.chain.bodyA.position
   var pointB = this.chain.bodyB.position
   strokeWeight(3)
   line(bird.body.position.x,bird.body.position.y,constrainedlog.body.position.x,constrainedlog.body.position.y)

    }
}