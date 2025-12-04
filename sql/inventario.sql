--
-- PostgreSQL database dump
--

\restrict jg98b2WUAKZq0Tikrud5hYuOZ4chKQFUnC6Ie2UteW7rVjAQNWICTFj4ckr6OtL

-- Dumped from database version 17.6
-- Dumped by pg_dump version 17.6

-- Started on 2025-12-04 06:45:16

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 224 (class 1259 OID 16711)
-- Name: alerta_stock; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.alerta_stock (
    id integer NOT NULL,
    mensaje character varying NOT NULL,
    fecha timestamp without time zone DEFAULT now() NOT NULL,
    "productoId" integer
);


ALTER TABLE public.alerta_stock OWNER TO postgres;

--
-- TOC entry 223 (class 1259 OID 16710)
-- Name: alerta_stock_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.alerta_stock_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.alerta_stock_id_seq OWNER TO postgres;

--
-- TOC entry 4890 (class 0 OID 0)
-- Dependencies: 223
-- Name: alerta_stock_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.alerta_stock_id_seq OWNED BY public.alerta_stock.id;


--
-- TOC entry 222 (class 1259 OID 16702)
-- Name: almacen; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.almacen (
    id integer NOT NULL,
    nombre character varying NOT NULL,
    direccion character varying NOT NULL
);


ALTER TABLE public.almacen OWNER TO postgres;

--
-- TOC entry 221 (class 1259 OID 16701)
-- Name: almacen_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.almacen_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.almacen_id_seq OWNER TO postgres;

--
-- TOC entry 4891 (class 0 OID 0)
-- Dependencies: 221
-- Name: almacen_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.almacen_id_seq OWNED BY public.almacen.id;


--
-- TOC entry 220 (class 1259 OID 16693)
-- Name: categoria; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.categoria (
    id integer NOT NULL,
    nombre character varying NOT NULL,
    descripcion character varying
);


ALTER TABLE public.categoria OWNER TO postgres;

--
-- TOC entry 219 (class 1259 OID 16692)
-- Name: categoria_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.categoria_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.categoria_id_seq OWNER TO postgres;

--
-- TOC entry 4892 (class 0 OID 0)
-- Dependencies: 219
-- Name: categoria_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.categoria_id_seq OWNED BY public.categoria.id;


--
-- TOC entry 226 (class 1259 OID 16726)
-- Name: movimiento; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.movimiento (
    id integer NOT NULL,
    tipo character varying NOT NULL,
    cantidad integer NOT NULL,
    fecha timestamp without time zone DEFAULT now() NOT NULL,
    "productoId" integer,
    "almacenId" integer
);


ALTER TABLE public.movimiento OWNER TO postgres;

--
-- TOC entry 225 (class 1259 OID 16725)
-- Name: movimiento_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.movimiento_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.movimiento_id_seq OWNER TO postgres;

--
-- TOC entry 4893 (class 0 OID 0)
-- Dependencies: 225
-- Name: movimiento_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.movimiento_id_seq OWNED BY public.movimiento.id;


--
-- TOC entry 218 (class 1259 OID 16682)
-- Name: producto; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.producto (
    id integer NOT NULL,
    nombre character varying NOT NULL,
    descripcion character varying,
    "stockActual" integer DEFAULT 0 NOT NULL,
    "stockMinimo" integer DEFAULT 0 NOT NULL
);


ALTER TABLE public.producto OWNER TO postgres;

--
-- TOC entry 217 (class 1259 OID 16681)
-- Name: producto_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.producto_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.producto_id_seq OWNER TO postgres;

--
-- TOC entry 4894 (class 0 OID 0)
-- Dependencies: 217
-- Name: producto_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.producto_id_seq OWNED BY public.producto.id;


--
-- TOC entry 232 (class 1259 OID 19145)
-- Name: proveedor; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.proveedor (
    id integer NOT NULL,
    nombre character varying NOT NULL,
    contacto character varying,
    telefono character varying
);


ALTER TABLE public.proveedor OWNER TO postgres;

--
-- TOC entry 231 (class 1259 OID 19144)
-- Name: proveedor_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.proveedor_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.proveedor_id_seq OWNER TO postgres;

--
-- TOC entry 4895 (class 0 OID 0)
-- Dependencies: 231
-- Name: proveedor_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.proveedor_id_seq OWNED BY public.proveedor.id;


--
-- TOC entry 230 (class 1259 OID 19129)
-- Name: rol; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.rol (
    id integer NOT NULL,
    nombre character varying NOT NULL
);


ALTER TABLE public.rol OWNER TO postgres;

--
-- TOC entry 229 (class 1259 OID 19128)
-- Name: rol_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.rol_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.rol_id_seq OWNER TO postgres;

--
-- TOC entry 4896 (class 0 OID 0)
-- Dependencies: 229
-- Name: rol_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.rol_id_seq OWNED BY public.rol.id;


--
-- TOC entry 234 (class 1259 OID 19154)
-- Name: ubicacion; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.ubicacion (
    id integer NOT NULL,
    "almacenId" integer,
    nombre character varying NOT NULL,
    descripcion character varying
);


ALTER TABLE public.ubicacion OWNER TO postgres;

--
-- TOC entry 233 (class 1259 OID 19153)
-- Name: ubicacion_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.ubicacion_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.ubicacion_id_seq OWNER TO postgres;

--
-- TOC entry 4897 (class 0 OID 0)
-- Dependencies: 233
-- Name: ubicacion_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.ubicacion_id_seq OWNED BY public.ubicacion.id;


--
-- TOC entry 228 (class 1259 OID 19117)
-- Name: usuario; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.usuario (
    id integer NOT NULL,
    username character varying NOT NULL,
    password character varying NOT NULL,
    "isActive" boolean DEFAULT true NOT NULL,
    "rolId" integer
);


ALTER TABLE public.usuario OWNER TO postgres;

--
-- TOC entry 227 (class 1259 OID 19116)
-- Name: usuario_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.usuario_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.usuario_id_seq OWNER TO postgres;

--
-- TOC entry 4898 (class 0 OID 0)
-- Dependencies: 227
-- Name: usuario_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.usuario_id_seq OWNED BY public.usuario.id;


--
-- TOC entry 4686 (class 2604 OID 16714)
-- Name: alerta_stock id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.alerta_stock ALTER COLUMN id SET DEFAULT nextval('public.alerta_stock_id_seq'::regclass);


--
-- TOC entry 4685 (class 2604 OID 16705)
-- Name: almacen id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.almacen ALTER COLUMN id SET DEFAULT nextval('public.almacen_id_seq'::regclass);


--
-- TOC entry 4684 (class 2604 OID 16696)
-- Name: categoria id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.categoria ALTER COLUMN id SET DEFAULT nextval('public.categoria_id_seq'::regclass);


--
-- TOC entry 4688 (class 2604 OID 16729)
-- Name: movimiento id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.movimiento ALTER COLUMN id SET DEFAULT nextval('public.movimiento_id_seq'::regclass);


--
-- TOC entry 4681 (class 2604 OID 16685)
-- Name: producto id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.producto ALTER COLUMN id SET DEFAULT nextval('public.producto_id_seq'::regclass);


--
-- TOC entry 4693 (class 2604 OID 19148)
-- Name: proveedor id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.proveedor ALTER COLUMN id SET DEFAULT nextval('public.proveedor_id_seq'::regclass);


--
-- TOC entry 4692 (class 2604 OID 19132)
-- Name: rol id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.rol ALTER COLUMN id SET DEFAULT nextval('public.rol_id_seq'::regclass);


--
-- TOC entry 4694 (class 2604 OID 19157)
-- Name: ubicacion id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.ubicacion ALTER COLUMN id SET DEFAULT nextval('public.ubicacion_id_seq'::regclass);


--
-- TOC entry 4690 (class 2604 OID 19120)
-- Name: usuario id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.usuario ALTER COLUMN id SET DEFAULT nextval('public.usuario_id_seq'::regclass);


--
-- TOC entry 4874 (class 0 OID 16711)
-- Dependencies: 224
-- Data for Name: alerta_stock; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.alerta_stock (id, mensaje, fecha, "productoId") FROM stdin;
\.


--
-- TOC entry 4872 (class 0 OID 16702)
-- Dependencies: 222
-- Data for Name: almacen; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.almacen (id, nombre, direccion) FROM stdin;
1	Taller principal	Calle 123
\.


--
-- TOC entry 4870 (class 0 OID 16693)
-- Dependencies: 220
-- Data for Name: categoria; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.categoria (id, nombre, descripcion) FROM stdin;
1	Retratos	Obras de retratos realistas
2	Materiales de Arte	Incluye lienzos, pinturas, pinceles y lápices de dibujo.
\.


--
-- TOC entry 4876 (class 0 OID 16726)
-- Dependencies: 226
-- Data for Name: movimiento; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.movimiento (id, tipo, cantidad, fecha, "productoId", "almacenId") FROM stdin;
1	ENTRADA	5	2025-11-10 11:08:16.258775	2	1
\.


--
-- TOC entry 4868 (class 0 OID 16682)
-- Dependencies: 218
-- Data for Name: producto; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.producto (id, nombre, descripcion, "stockActual", "stockMinimo") FROM stdin;
2	Pan Marraqueta	Pan tradicional	105	20
\.


--
-- TOC entry 4882 (class 0 OID 19145)
-- Dependencies: 232
-- Data for Name: proveedor; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.proveedor (id, nombre, contacto, telefono) FROM stdin;
\.


--
-- TOC entry 4880 (class 0 OID 19129)
-- Dependencies: 230
-- Data for Name: rol; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.rol (id, nombre) FROM stdin;
1	admin
\.


--
-- TOC entry 4884 (class 0 OID 19154)
-- Dependencies: 234
-- Data for Name: ubicacion; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.ubicacion (id, "almacenId", nombre, descripcion) FROM stdin;
\.


--
-- TOC entry 4878 (class 0 OID 19117)
-- Dependencies: 228
-- Data for Name: usuario; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.usuario (id, username, password, "isActive", "rolId") FROM stdin;
1	joel	1234	t	1
\.


--
-- TOC entry 4899 (class 0 OID 0)
-- Dependencies: 223
-- Name: alerta_stock_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.alerta_stock_id_seq', 1, false);


--
-- TOC entry 4900 (class 0 OID 0)
-- Dependencies: 221
-- Name: almacen_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.almacen_id_seq', 1, true);


--
-- TOC entry 4901 (class 0 OID 0)
-- Dependencies: 219
-- Name: categoria_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.categoria_id_seq', 2, true);


--
-- TOC entry 4902 (class 0 OID 0)
-- Dependencies: 225
-- Name: movimiento_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.movimiento_id_seq', 1, true);


--
-- TOC entry 4903 (class 0 OID 0)
-- Dependencies: 217
-- Name: producto_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.producto_id_seq', 2, true);


--
-- TOC entry 4904 (class 0 OID 0)
-- Dependencies: 231
-- Name: proveedor_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.proveedor_id_seq', 1, false);


--
-- TOC entry 4905 (class 0 OID 0)
-- Dependencies: 229
-- Name: rol_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.rol_id_seq', 1, true);


--
-- TOC entry 4906 (class 0 OID 0)
-- Dependencies: 233
-- Name: ubicacion_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.ubicacion_id_seq', 1, false);


--
-- TOC entry 4907 (class 0 OID 0)
-- Dependencies: 227
-- Name: usuario_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.usuario_id_seq', 3, true);


--
-- TOC entry 4714 (class 2606 OID 19152)
-- Name: proveedor PK_405f60886417ece76cb5681550a; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.proveedor
    ADD CONSTRAINT "PK_405f60886417ece76cb5681550a" PRIMARY KEY (id);


--
-- TOC entry 4696 (class 2606 OID 16691)
-- Name: producto PK_5be023b11909fe103e24c740c7d; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.producto
    ADD CONSTRAINT "PK_5be023b11909fe103e24c740c7d" PRIMARY KEY (id);


--
-- TOC entry 4716 (class 2606 OID 19161)
-- Name: ubicacion PK_6ed79468fe4f565d8be642742a3; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.ubicacion
    ADD CONSTRAINT "PK_6ed79468fe4f565d8be642742a3" PRIMARY KEY (id);


--
-- TOC entry 4700 (class 2606 OID 16709)
-- Name: almacen PK_78a1ec4675cb911ff041d485b3b; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.almacen
    ADD CONSTRAINT "PK_78a1ec4675cb911ff041d485b3b" PRIMARY KEY (id);


--
-- TOC entry 4704 (class 2606 OID 16734)
-- Name: movimiento PK_809988d143ce94a95f3d30164ab; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.movimiento
    ADD CONSTRAINT "PK_809988d143ce94a95f3d30164ab" PRIMARY KEY (id);


--
-- TOC entry 4706 (class 2606 OID 19125)
-- Name: usuario PK_a56c58e5cabaa04fb2c98d2d7e2; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.usuario
    ADD CONSTRAINT "PK_a56c58e5cabaa04fb2c98d2d7e2" PRIMARY KEY (id);


--
-- TOC entry 4710 (class 2606 OID 19136)
-- Name: rol PK_c93a22388638fac311781c7f2dd; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.rol
    ADD CONSTRAINT "PK_c93a22388638fac311781c7f2dd" PRIMARY KEY (id);


--
-- TOC entry 4698 (class 2606 OID 16700)
-- Name: categoria PK_f027836b77b84fb4c3a374dc70d; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.categoria
    ADD CONSTRAINT "PK_f027836b77b84fb4c3a374dc70d" PRIMARY KEY (id);


--
-- TOC entry 4702 (class 2606 OID 16719)
-- Name: alerta_stock PK_f3e937be1cfde35c696a4839cc3; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.alerta_stock
    ADD CONSTRAINT "PK_f3e937be1cfde35c696a4839cc3" PRIMARY KEY (id);


--
-- TOC entry 4708 (class 2606 OID 19127)
-- Name: usuario UQ_6ccff37176a6978449a99c82e10; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.usuario
    ADD CONSTRAINT "UQ_6ccff37176a6978449a99c82e10" UNIQUE (username);


--
-- TOC entry 4712 (class 2606 OID 19138)
-- Name: rol UQ_9792c580a992d554ee1621c5b45; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.rol
    ADD CONSTRAINT "UQ_9792c580a992d554ee1621c5b45" UNIQUE (nombre);


--
-- TOC entry 4721 (class 2606 OID 19168)
-- Name: ubicacion FK_365bfa3c7add56704b68187269b; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.ubicacion
    ADD CONSTRAINT "FK_365bfa3c7add56704b68187269b" FOREIGN KEY ("almacenId") REFERENCES public.almacen(id) ON DELETE CASCADE;


--
-- TOC entry 4720 (class 2606 OID 19139)
-- Name: usuario FK_611daf5befc024d9e0bd7bdf4da; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.usuario
    ADD CONSTRAINT "FK_611daf5befc024d9e0bd7bdf4da" FOREIGN KEY ("rolId") REFERENCES public.rol(id);


--
-- TOC entry 4717 (class 2606 OID 16720)
-- Name: alerta_stock FK_63bfcb45d35cf1c1181220ea834; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.alerta_stock
    ADD CONSTRAINT "FK_63bfcb45d35cf1c1181220ea834" FOREIGN KEY ("productoId") REFERENCES public.producto(id);


--
-- TOC entry 4718 (class 2606 OID 16740)
-- Name: movimiento FK_74709590963201e3742cc6d979f; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.movimiento
    ADD CONSTRAINT "FK_74709590963201e3742cc6d979f" FOREIGN KEY ("almacenId") REFERENCES public.almacen(id);


--
-- TOC entry 4719 (class 2606 OID 16735)
-- Name: movimiento FK_bd91f36ff1b93bb1a8d90d680a1; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.movimiento
    ADD CONSTRAINT "FK_bd91f36ff1b93bb1a8d90d680a1" FOREIGN KEY ("productoId") REFERENCES public.producto(id);


-- Completed on 2025-12-04 06:45:18

--
-- PostgreSQL database dump complete
--

\unrestrict jg98b2WUAKZq0Tikrud5hYuOZ4chKQFUnC6Ie2UteW7rVjAQNWICTFj4ckr6OtL

