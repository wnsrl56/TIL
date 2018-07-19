  let char = function() {
        this.text = 'first';
        this.b = ['d'];                                          
    };
        
    char.prototype.sk = {
        talk : function() { 
            console.log(this.text);                    
            return this.text;
        },
        getb : function() {                     
            return this.b;
        },
    };
    
    Object.prototype.setProps = function(obj, scope) {
        const origin = Symbol['origin'];            
        if(obj) {                    
            this.__proto__[origin] = Object.assign({}, this.sk);        
            Object.assign(this.sk, obj);
            let keyList = Object.keys(this.sk);
            keyList.forEach((v)=>{
                this.sk[v] = this.sk[v].bind(scope);
             });
        } else {
            this.__proto__[origin] = this.sk;          
        }
        return origin;
    };

    Object.prototype.returnProps = function(symbolValue) {
        if(this.sk !== null && this.__proto__[symbolValue]) {
            this.sk = Object.assign({}, this.__proto__[symbolValue]);
            let keyList = Object.keys(this.sk);
            keyList.forEach((v)=>{
                this.sk[v] = this.sk[v].bind(this);
             });
        }    
    };

    let char2 = function() {
        this.text = 'second';
        this.skillList = ['a'];    
    };

    char2.prototype.sk = {    
        getSkillList : function() { return this.skillList;},
        getPower : function() { console.log('getPower'); },
    };
    
    let h = new char();
    let e = new char2();
    
    h.sk.talk();
    let sym = h.setProps(e.sk, e);
    h.sk.talk();

    h.returnProps(sym);
    h.sk.talk();
