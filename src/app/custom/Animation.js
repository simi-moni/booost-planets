import gsap from 'gsap/all';

export default class Animation {
    constructor() {
        this._planets = document.querySelectorAll('.dots');
        this._scaleBtn = document.querySelector('#scale-button');
        this._positionBtn = document.querySelector('#position-button');
        this._stopBtn = document.querySelector('#stop-button');
        this._tl = gsap.timeline();
    }

    start() {
        const self = this;

        this._scaleBtn.addEventListener('click', function () {
            if (self._tl.isActive()) {
                self._tl.pause(0);
                self._tl.clear();
            }
            self._tl.play()
                .to(self._planets, {
                    duration: 1,
                    scale: 0.3,
                    yoyo: true,
                    repeat: -1,
                    id: "scaleStagger",
                    stagger: {
                        each: 0.3,
                        from: "start",
                        yoyo: true,
                    }
                });
        });

        this._positionBtn.addEventListener('click', function () {
            if (self._tl.isActive()) {
                self._tl.pause(0);
                self._tl.clear();
            }
            self._tl.play()
                .to(self._planets, {
                    id: "positionStagger",
                    stagger: {
                        each: 0.3,
                        from: "start",
                        y: 10,
                        yoyo: true,
                        repeat: -1,
                    }
                });
        });

        this._stopBtn.addEventListener('click', function () { self._tl.restart(0).pause(); self._tl.clear(); });
    }
}