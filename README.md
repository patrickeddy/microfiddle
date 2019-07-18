# Microfiddle

The URL contains the entire program.

Yes, it's a terrible idea. But it's fun.

### Demo

[https://patrickeddy.github.io/microfiddle](https://patrickeddy.github.io/microfiddle)

### Examples

- [Seconds Elapsed](https://patrickeddy.github.io/microfiddle/?c=const+start+%3D+new+Date%28%29%0A%0Afunction+loop%28%29+%7B%0A++setTimeout%28function%28%29+%7B%0A+++const+secElapsed+%3D+Number%28%28%28new+Date%29+-+start%29+%2F+1000%29.toFixed%280%29%0A+++console.log%28%60%24%7BsecElapsed%7D+seconds%60%29%0A+++loop%28%29%0A++%7D%2C+1000%29%0A%7D%0A%0Aloop%28%29)
- [Ball](https://patrickeddy.github.io/microfiddle/?c=const+width+%3D+700%0Aconst+height+%3D+350%0Aconst+FPS+%3D+30%0A%0Aconst+ballRadius+%3D+10%0Alet+ballPos+%3D+%7B+x%3A+50%2C+y%3A+100+%7D%0A%0Aconst+speed+%3D+10%0Alet+dx+%3D+speed%0Alet+dy+%3D+speed%0A%0Alet+ctx%0A%0Afunction+draw%28%29+%7B%0A++++ctx.fillStyle+%3D+%27blue%27%0A++++ctx.fillRect%280%2C+0%2C+width%2C+height%29%0A++++ctx.fillStyle+%3D+%27white%27%0A++++ctx.beginPath%28%29%0A++++ctx.ellipse%28ballPos.x%2C+ballPos.y%2C+ballRadius%2C+ballRadius%2C+0%2C+0%2C+Math.PI+*+2%29%0A++++ctx.fill%28%29%0A%7D%0A%0Afunction+update%28%29+%7B%0A++if+%28ballPos.x+%3E%3D+width+-+ballRadius*2+-+395+%7C%7C+ballPos.x+%3C%3D+0%29+%7B+dx+*%3D+-1+%7D%0A++if+%28ballPos.y+%3E%3D+height+-+ballRadius*2+-+195+%7C%7C+ballPos.y+%3C%3D+0%29+%7B+dy+*%3D+-1+%7D%0A%0A++ballPos.x+%2B%3D+dx%0A++ballPos.y+%2B%3D+dy%0A%0A++draw%28%29%0A++setTimeout%28update%2C+1000+%2F+FPS%29%0A%7D%0A%0Afunction+main%28%29+%7B%0A++%24%28document%29.ready%28function%28%29%7B%0A+++%24%28%27%23console%27%29.html%28%60%3Ccanvas+id%3D%22canvas%22+style%3D%22width%3A%24%7Bwidth%7Dpx%3B+height%3A%24%7Bheight%7Dpx%3B%22%3E%3C%2Fcanvas%3E%60%29%0A+++ctx+%3D+%24%28%27%23canvas%27%29.get%280%29.getContext%28%272d%27%29%0A+++update%28%29%0A++%7D%29%0A%7D%0A%0Afetch%28%22https%3A%2F%2Fajax.googleapis.com%2Fajax%2Flibs%2Fjquery%2F3.4.1%2Fjquery.min.js%22%29%0A++.then%28function%28res%29+%7B+return+res.text%28%29%7D%29%0A++.then%28function%28src%29%7B+eval%28src%29%3B+return+Promise.resolve%28%29+%7D%29%0A++.then%28function%28%29+%7B+main%28%29+%7D%29%0A)

### Contributions

If you'd like to share your program, make a PR and add it to the examples list above.
