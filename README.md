# typeORM-study
<h2>typescript-typeORM-api</h2>
<h3>목표</h3>
<li>typescript 학습</li>
<li>typeORM 학습</li>
<br>
<h3>Dependency</h3>
<li>express</li>
<li>mysql</li>
<li>ts-node</li>
<li>typeorm</li>
<li>typescript</li>
<br>
<h3>요구사항</h3>
<li>사용자를 등록,(전체,상세)조회,수정 할 수 있다</li>
<li>주소를 등록 할 수 있다</li>
<li>Address에서 User와 조인된 데이터를 가져올 수 있다(단방향매핑)</li>
<li>Address 와 User 테이블은 서로에게 접근할 수 있다(양방향매핑)</li>
<li>기존 User 정보를 불러와 FK로 연결된 새로운 Address 객체를 저장할 수 있다. </li>
<br>
<h3>Entity</h3>
<li>Address</li>

    @Entity()
    export class Address {
      @PrimaryGeneratedColumn()
      id: number;

      @Column()
      detailAddress: string;

      @ManyToOne(() => User, (user) => user.addresses)
      user: User
    }

<li>User</li>

    @Entity()
    export class User {
      @PrimaryGeneratedColumn()
      id: number;

      @Column()
      name: string;

      @Column()
      age: number;

      @OneToMany(() => Address, (address) => address.user)
      addresses: Address[]
    }
    
<br>
<li>연관관계 설정</li>
<li>POSTMAN을 통한 API 테스트</li>
<li>QueryBuilder 이용하기</li>
<h4>및 상세 학습내용은 아래 블로그에 글로 정리했습니다.</h4>
<h2>https://feelfreetothink.tistory.com/169</h2>











