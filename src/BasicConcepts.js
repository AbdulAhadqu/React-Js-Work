const users = {
    Alex: {
      email: 'alex@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript'],
      age: 20,
      isLoggedIn: false,
      points: 30
    },
    Asab: {
      email: 'asab@asab.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
      age: 25,
      isLoggedIn: false,
      points: 50
    },
    Brook: {
      email: 'daniel@daniel.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
      age: 30,
      isLoggedIn: true,
      points: 50
    },
    Daniel: {
      email: 'daniel@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    John: {
      email: 'john@john.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
      age: 20,
      isLoggedIn: true,
      points: 50
    },
    Thomas: {
      email: 'thomas@thomas.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    Paul: {
      email: 'paul@paul.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
      age: 20,
      isLoggedIn: false,
      points: 40
    }
  }
  for (let user in users){
      if (user.toLowerCase() == 'daniel'){
          for (let i=0;i<users[user].skills.length;i++){
      
          console.log(' "'+users[user].skills[i].split('').join(',')+'" ');}
          }
  }
  /* =============================================================== */
  function quadratic (a,b,c){
    let mul =Math.abs( a*c);
      const factors=[];
    for (let i=1; i<=mul; i++){
        if (mul % i ===0){
             factors.push(i)
        }
    }
    // console.log (factors)
    const pairs={x:0,y:0};
    for (let i= 0; i< factors.length; i++){
        for (let j=0; j<factors.length; j++ ){
            if (factors[i]+ factors[j]=== b|| Math.abs(factors[i]-factors[j]===b)){
                pairs.x = factors[i];
                pairs.y= factors [j];
                break;
            }
        }
    }
    console.log(pairs)
}
quadratic (1,1,-12);