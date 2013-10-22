function Cat (name, owner) {
	this.name = name;
	this.owner = owner;
}

Cat.prototype.cuteStatement = function () {
	return this.owner + " loves " + this.name + ".";
};

cat1 = new Cat("gadget", "jing");
cat2 = new Cat("alex", "kk");
console.log(cat1.cuteStatement());
console.log(cat2.cuteStatement());

Cat.prototype.cuteStatement = function () {
	return "everyone loves " + this.name + "!";
};

console.log(cat1.cuteStatement());
console.log(cat2.cuteStatement());

Cat.prototype.meow = function () {
	return "meow";
}
cat1.meow = function () {
	return "meow meow meow!";
}
console.log(cat1.meow());
console.log(cat2.meow());

