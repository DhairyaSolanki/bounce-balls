class rope { 

    constructor(body, point){

        var prop = {

            bodyA : body,
            pointB : point
        }
        this.ropeconstraint = Constraint.create (prop);
        World.add (world, this.ropeconstraint);
    }

    display (){

        strokeWeight (4);
        line (this.ropeconstraint.bodyA.position.x,this.ropeconstraint.bodyA.position.y, this.ropeconstraint.pointB.x, this.ropeconstraint.pointB.y);
    }
}