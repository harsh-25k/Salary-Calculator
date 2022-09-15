// data, logic

export const salaryOperations = {
    basicSalary : 0,  //member of object(KEY)
    //key:value
    //hra:function(){}
    //ES6 shorthand way of object creation

    takeSalary(basicSalary){
        this.basicSalary = basicSalary;
    },

    hra(){
        return this.basicSalary * 0.5;
    },
    
    da(){
        return this.basicSalary * 0.1;
    
    },
    
    ta(){
        return this.basicSalary * 0.3;
    
    },

    ma(){
        return this.basicSalary * 0.4;
    },

    pf(){
        return this.basicSalary * 0.05;
    },

    gs(){
        return parseFloat(this.basicSalary) + this.hra() + this.da() + 
        this.ta() + this.ma();

    },
    tax(){
        var t = 0;
        if(this.gs() > 900000) t = this.gs() * 0.3;
        else if(this.gs() > 700000) t = this.gs() * 0.2;
        else if(this.gs() > 500000) t = this.gs() * 0.1;
        else t = this.gs() * 0.05;

        return t;
    },

    ns(){
        return this.gs() - this.pf() - this.tax();
    }
    
}
