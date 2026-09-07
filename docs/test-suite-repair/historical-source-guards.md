# Original stage-specific source guards (unchanged historical values)

These one-time migration guards predate the subsequent committed lesson revisions. They are retained here verbatim for audit; current lesson contracts and immutable Listening audio hashes remain tested. No historical hash was replaced with a current hash.

## p1Foundation

```typescript
test('L7–L28 lesson sources are protected by their pre-P1 hashes', () => {
  const expected = [
    '1a6cd1e5ca9e074b7d2ebc464d7bbbb9d4fbbb462bbcaf1836d4a9557b30bf8e', 'aa1d5203da9cc94acf9544591936510fa22d9de0060a6e7085d96065fe89d77a',
    'c0f75d5bec761516abaeed9004ce35cc4901d9346b145fdabc57a4b1c647036d', '1e508adfc4da95be14052882e3691352fd90393ea28500be40a394ca9906be96',
    '49f9cbcec6e5c7bd5d53e80aff3d2a741a6097aee9c9b109bc63a5e360fd552f', '8f4873db26bf8d241cf14934c724c6f6d22a0796d8caf9be7f2eaee13db9936e',
    'dbbeb3c9b0a5215f23fbb9d15afd30de4b1380bf1d6e8e7087f0d2852d207b5b', '3db407c1f7e037f5125696133a864c19004fb081acb201aeeae69df3d59968ef',
    'bcd1d4e37188314d4ce6683ff4c1c3264dc5b4f582e95ce0e830ad738a00fd10', 'f66f5adfb9abfb3e179ba10642d39f6e89390de01e495a344d137b33adecf657',
    'c46096bd93fdba90a71eb4dabec4558bc78ba2543d95c3d7ce09c8e59ae03a3e', 'dc5729fb6d2ba0bf2d4ea8d48e5f8437858e5a52a2e9de0e319d56bd045ab7cf',
    '85c857d5601a80697d67cdfc962218dc6265e12937d282f4c9e0eff64cf8c325', '7805292794411d967f82f14198542122f611b10861a21935dd6a9b1b9c611138',
    '970477dfcfa7481ad1e8c7aecb1ad9adf9c5218dac3814a4be15e18f79a0c0b1', 'c31bca32416e054cd9156dfbed0387a1f5b87d3c5bb4410661923c5b4d318c8c',
    'a5faee5ae85818a524f94f8f5ee78f50b661cad5df89602c35b127f45f993daa', '84047edb1c03f73b3b7e3eb8668e9a5ac8fa2df3008213601873819d6cd90d15',
    '94dfc11633622c67447973b10ca3fc3c70c8f6ed298ed454af979996ecdffc74', 'fb9572913f6caaf591e3d11ed7420674ca567932c8478f0d3e1d70d2db5f39ee',
    '07e435af05a388958d88aeb5a521b5def76ff31462dd4368b228bca5dad98b09', '617f7df1bbd486161a0dba0f63ae0be08011eeacd2b69a060d282ea3e7de2fcc',
  ];
  for (let lesson = 7; lesson <= 28; lesson += 1) assert.equal(sha(new URL(`../src/data/lessons/lesson${lesson}.ts`, import.meta.url)), expected[lesson - 7], `L${lesson}`);
});

```

## p2Lessons

```typescript
test('P2 does not alter protected lesson sources L11–L28',()=>{const hashes=['49f9cbcec6e5c7bd5d53e80aff3d2a741a6097aee9c9b109bc63a5e360fd552f','8f4873db26bf8d241cf14934c724c6f6d22a0796d8caf9be7f2eaee13db9936e','dbbeb3c9b0a5215f23fbb9d15afd30de4b1380bf1d6e8e7087f0d2852d207b5b','3db407c1f7e037f5125696133a864c19004fb081acb201aeeae69df3d59968ef','bcd1d4e37188314d4ce6683ff4c1c3264dc5b4f582e95ce0e830ad738a00fd10','f66f5adfb9abfb3e179ba10642d39f6e89390de01e495a344d137b33adecf657','c46096bd93fdba90a71eb4dabec4558bc78ba2543d95c3d7ce09c8e59ae03a3e','dc5729fb6d2ba0bf2d4ea8d48e5f8437858e5a52a2e9de0e319d56bd045ab7cf','85c857d5601a80697d67cdfc962218dc6265e12937d282f4c9e0eff64cf8c325','7805292794411d967f82f14198542122f611b10861a21935dd6a9b1b9c611138','970477dfcfa7481ad1e8c7aecb1ad9adf9c5218dac3814a4be15e18f79a0c0b1','c31bca32416e054cd9156dfbed0387a1f5b87d3c5bb4410661923c5b4d318c8c','a5faee5ae85818a524f94f8f5ee78f50b661cad5df89602c35b127f45f993daa','84047edb1c03f73b3b7e3eb8668e9a5ac8fa2df3008213601873819d6cd90d15','94dfc11633622c67447973b10ca3fc3c70c8f6ed298ed454af979996ecdffc74','fb9572913f6caaf591e3d11ed7420674ca567932c8478f0d3e1d70d2db5f39ee','07e435af05a388958d88aeb5a521b5def76ff31462dd4368b228bca5dad98b09','617f7df1bbd486161a0dba0f63ae0be08011eeacd2b69a060d282ea3e7de2fcc'];for(let lesson=11;lesson<=28;lesson+=1)assert.equal(sha(new URL(`../src/data/lessons/lesson${lesson}.ts`,import.meta.url)),hashes[lesson-11],`lesson ${lesson}`);});

```

## p3Lessons

```typescript
test('P3 leaves L15–L27 and P6B lesson sources byte-identical',()=>{
  const expected:Record<number,string>={15:'bcd1d4e37188314d4ce6683ff4c1c3264dc5b4f582e95ce0e830ad738a00fd10',16:'f66f5adfb9abfb3e179ba10642d39f6e89390de01e495a344d137b33adecf657',17:'c46096bd93fdba90a71eb4dabec4558bc78ba2543d95c3d7ce09c8e59ae03a3e',18:'dc5729fb6d2ba0bf2d4ea8d48e5f8437858e5a52a2e9de0e319d56bd045ab7cf',19:'85c857d5601a80697d67cdfc962218dc6265e12937d282f4c9e0eff64cf8c325',20:'7805292794411d967f82f14198542122f611b10861a21935dd6a9b1b9c611138',21:'970477dfcfa7481ad1e8c7aecb1ad9adf9c5218dac3814a4be15e18f79a0c0b1',22:'c31bca32416e054cd9156dfbed0387a1f5b87d3c5bb4410661923c5b4d318c8c',23:'a5faee5ae85818a524f94f8f5ee78f50b661cad5df89602c35b127f45f993daa',24:'84047edb1c03f73b3b7e3eb8668e9a5ac8fa2df3008213601873819d6cd90d15',25:'94dfc11633622c67447973b10ca3fc3c70c8f6ed298ed454af979996ecdffc74',26:'fb9572913f6caaf591e3d11ed7420674ca567932c8478f0d3e1d70d2db5f39ee',27:'07e435af05a388958d88aeb5a521b5def76ff31462dd4368b228bca5dad98b09'};
  for(const [n,hash] of Object.entries(expected))assert.equal(sha256(new URL(`../src/data/lessons/lesson${n}.ts`,import.meta.url)),hash,`L${n}`);
  for(const asset of ['l21_listening_b_film_choice','l22_listening_b_office_instructions','l23_listening_b_free_week','l24_listening_b_city_or_suburbs'])assert.equal(existsSync(new URL(`../public/audio/${asset}.mp3`,import.meta.url)),true);
});

```

## p4Lessons

```typescript
test('P4 leaves L18-L27, L28, and P6B L21-L24 source files byte-identical', () => {
  const contracts = new Map([
    [18, 'dc5729fb6d2ba0bf2d4ea8d48e5f8437858e5a52a2e9de0e319d56bd045ab7cf'],
    [19, '85c857d5601a80697d67cdfc962218dc6265e12937d282f4c9e0eff64cf8c325'],
    [20, '7805292794411d967f82f14198542122f611b10861a21935dd6a9b1b9c611138'],
    [21, '970477dfcfa7481ad1e8c7aecb1ad9adf9c5218dac3814a4be15e18f79a0c0b1'],
    [22, 'c31bca32416e054cd9156dfbed0387a1f5b87d3c5bb4410661923c5b4d318c8c'],
    [23, 'a5faee5ae85818a524f94f8f5ee78f50b661cad5df89602c35b127f45f993daa'],
    [24, '84047edb1c03f73b3b7e3eb8668e9a5ac8fa2df3008213601873819d6cd90d15'],
    [25, '94dfc11633622c67447973b10ca3fc3c70c8f6ed298ed454af979996ecdffc74'],
    [26, 'fb9572913f6caaf591e3d11ed7420674ca567932c8478f0d3e1d70d2db5f39ee'],
    [27, '07e435af05a388958d88aeb5a521b5def76ff31462dd4368b228bca5dad98b09'],
    [28, '617f7df1bbd486161a0dba0f63ae0be08011eeacd2b69a060d282ea3e7de2fcc'],
  ]);
  for (const [lesson, expected] of contracts) {
    const bytes = readFileSync(new URL(`../src/data/lessons/lesson${lesson}.ts`, import.meta.url));
    assert.equal(createHash('sha256').update(bytes).digest('hex'), expected, `L${lesson}`);
  }
});

```
