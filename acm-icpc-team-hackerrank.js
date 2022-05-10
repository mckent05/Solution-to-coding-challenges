function acmTeam(topic) {
    // Write your code here
    const result = []
    topic.map((t, index) => {
        for(var i = index + 1; i<topic.length; i++) {
            const topic1 = t.split('')
            const check = []
            const topic2 = topic[i].split('')
            topic1.map((g, index) => {
                if(parseInt(topic1[index]) || parseInt(topic2[index])) {
                    check.push(index+1)
                }
            })
            result.push(check.length)
        }
    })
     return result
    .sort()
    .reverse()
    .reduce(
      (target, item, index) => {
        !index && (target[0] = item);

        target[0] == item && target[1]++;

        return target;
      },
      [0, 0]
    );

}
